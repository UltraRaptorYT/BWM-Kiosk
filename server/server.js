const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");

dotenv.config();

const app = express();
app.use(cors());

// Initialize Supabase Client
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Working perfectly!" });
});

app.get("/stream-audio", async (req, res) => {
  try {
    let audio_name = req.query.audio;
    if (!audio_name) {
      throw "Missing audio name"
    }
    // Fetch a signed URL from Supabase (valid for 60 seconds)
    const { data, error } = await supabase.storage
      .from("bwm-kiosk") // Bucket name
      .createSignedUrl(audio_name, 60); // File path and expiration time

    if (error) {
      console.error("Error fetching signed URL:", error);
      return res.status(500).send("Error fetching audio");
    }

    // Fetch the actual audio file from the signed URL
    const audioStream = await axios({
      url: data.signedUrl,
      method: "GET",
      responseType: "stream",
    });

    // Set headers to indicate streaming audio
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", "inline");

    // Pipe the audio stream directly to the client
    audioStream.data.pipe(res);
  } catch (error) {
    console.error("Error streaming audio:", error);
    res.status(500).send("Error streaming audio");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
