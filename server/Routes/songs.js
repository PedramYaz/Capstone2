const express = require("express");
let app = express();

const cors = require("cors");

app.use(cors());

const apiHelper = require("../Helpers/APICall");

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
      res.json(response);
      // res.json(response.message.body.track_list[0].track.track_name);
    })
    .catch((error) => {
      res.send(error);
    });
});

/** Pick a random number from the length of the response in the above request
 *      use that number to than choose a song from the response
 *      and make the requests below to obtain the info for the song
 *          The song name & artist for at the end of the game to showcase
 *          The lyrics to show as the game continues
 */

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
      res.json({
        // REPLACE THE [0] WITH A RANDOM NUMBER GENERATOR BASED ON THE .LENGTH OF THE TOP CHARTS
        track_id: response.message.body.track_list[0].track.track_id,
        track_name: response.message.body.track_list[0].track.track_name,
        artist_name: response.message.body.track_list[0].track.artist_name,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/artist-of-the-day", (req, res) => {
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
      `${BASE_API_URL}/track.get?commontrack_id=5920049&apikey=${API_KEY}`
    )
    .then((response) => {
      res.json(response.message.body.track.artist_name);
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
  apiHelper
    .make_API_call(
      `${BASE_API_URL}/track.lyrics.get?track_id=15953433&apikey=${API_KEY}`
    )
    .then((response) => {
      res.json(response.message.body.lyrics.lyrics_body);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
