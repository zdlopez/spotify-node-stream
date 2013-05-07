var express = require("express"),
    Spotify = require("spotify-web");

var app = express();

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  res.render("index.jade");
});

Spotify.login(process.env.SPOTIFY_USERNAME, process.env.SPOTIFY_PASSWORD, function (err, spotify) {
  if (err) throw err;

  app.get("/audio/:uri", function (req, res) {
    spotify.get(req.params.uri, function (err, track) {
      track.play().pipe(res);
    });
  });
});

app.listen(3000);

