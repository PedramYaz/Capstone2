const express = require("express");
let app = express();

const cors = require("cors");

app.use(cors());

const axios = require("axios");

const apiHelper = require("../Helpers/APICall");
const { response } = require("express");

const router = express.Router();

const BASE_API_URL = "https://api.musixmatch.com/ws/1.1";
const API_KEY = "652b4d81c154cc02257fae7e1febeb19";

router.get("/top-charts", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  // res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  apiHelper
    .make_API_call(
      `${BASE_API_URL}/chart.tracks.get?chart_name=top&page=1&page_size=100&country=us&f_has_lyrics=1&apikey=${API_KEY}`
    )
    .then((response) => {
      // for (let i = 0; i < response.message.body.track_list.length; i++) {
      //   res.json({
      //     track_id: response.message.body.track_list[i].track.track_id,
      //     track_name: response.message.body.track_list[i].track.track_name,
      //     artist_name: response.message.body.track_list[i].track.artist_name,
      // });
      // }
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/choice-of-the-day", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  apiHelper
    .make_API_call(
      `${BASE_API_URL}/chart.tracks.get?chart_name=top&page=1&page_size=100&country=us&f_has_lyrics=1&apikey=${API_KEY}`
    )
    .then((response) => {
      const random = Math.floor(
        Math.random() * response.message.body.track_list.length
      );
      res.json({
        track_id: response.message.body.track_list[random].track.track_id,
        track_name: response.message.body.track_list[random].track.track_name,
        artist_name: response.message.body.track_list[random].track.artist_name,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/lyrics-of-the-day", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  axios
    .get("http://localhost:3001/songs/choice-of-the-day")
    .then((response) => {
      let trackId = response.data.track_id;
      return axios
        .get(
          `${BASE_API_URL}/track.lyrics.get?track_id=${trackId}&apikey=${API_KEY}`
        )
        .then((response) => {
          res.json(response.data.message.body.lyrics.lyrics_body);
        });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
