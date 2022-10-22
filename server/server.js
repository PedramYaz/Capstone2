const express = require("express");
const api_helper = require("./app");
const app = express();
const port = 3001;

app.get("/getAPIResponse", (req, res) => {
  api_helper
    .make_API_call(
      "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&apikey=652b4d81c154cc02257fae7e1febeb19&page=1&page_size=100&country=us&f_has_lyrics=1"
    )
    .then((response) => {
      res.json(response);
      // res.json(response.message.body.track_list[0].track.track_name);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
