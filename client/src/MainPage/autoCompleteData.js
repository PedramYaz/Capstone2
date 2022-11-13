import React, { useState } from "react";
import useGet from "../hooks/useGet";

// ! make request to API top charts, link them together like `${song_name} - ${artist_name}`
// ! Make a massive array of all these objects
// ! use that for your autoCompleteData
// ? for (let i = 0; i < response.data.message.body.track_list.length; i++ ){}
// ?    let results = [];
// ?    results.push([{key: response.data.message.body.track_list[i].track_name, value: response.data.message.body.track_list[i].artist_name}]);
// ? }
// ? setInfo(results)

const officialInfo = [];

const autoCompleteData = () => {
  const [info, setInfo] = useState([]);
  // const officialInfo = [];

  let url = "http://localhost:3000/songs/top-charts";
  axios.get(url).then((response) => {
    setInfo(response.data);
  });

  for (let i = 0; i < info.message.body.track_list.length; i++) {
    officialInfo.push([
      info.message.body.track_list[i].track.track_name,
      " - ",
      info.message.body.track_list[i].track.artist_name,
    ]);
  }
};

// const autoCompleteData = [
//   "joe",
//   "apple",
//   "architect",
//   "arrange",
//   "ball",
//   "bat",
//   "bowl",
//   "car",
//   "cab",
//   "cabbage",
//   "carrot",
//   "doctor",
//   "dark",
//   "derranged",
//   "devious",
// ];

const Songs = {
  message: {
    header: { status_code: 200, execute_time: 0.19325399398804 },
    body: {
      track_list: [
        {
          track: {
            track_id: 248716638,
            track_name: "Anti-Hero",
            track_name_translation_list: [],
            track_rating: 100,
            commontrack_id: 153776734,
            instrumental: 0,
            explicit: 1,
            has_lyrics: 1,
            has_subtitles: 1,
            has_richsync: 1,
            num_favourite: 147,
            album_id: 55133363,
            album_name: "Midnights (3am Edition)",
            artist_id: 259675,
            artist_name: "Taylor Swift",
            track_share_url:
              "https://www.musixmatch.com/lyrics/Taylor-Swift/Anti-Hero?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            track_edit_url:
              "https://www.musixmatch.com/lyrics/Taylor-Swift/Anti-Hero/edit?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            restricted: 0,
            updated_time: "2022-11-02T16:31:40Z",
            primary_genres: {
              music_genre_list: [
                {
                  music_genre: {
                    music_genre_id: 14,
                    music_genre_parent_id: 34,
                    music_genre_name: "Pop",
                    music_genre_name_extended: "Pop",
                    music_genre_vanity: "Pop",
                  },
                },
              ],
            },
          },
        },
        {
          track: {
            track_id: 246372347,
            track_name: "Unholy (feat. Kim Petras)",
            track_name_translation_list: [],
            track_rating: 100,
            commontrack_id: 152048112,
            instrumental: 0,
            explicit: 1,
            has_lyrics: 1,
            has_subtitles: 1,
            has_richsync: 1,
            num_favourite: 351,
            album_id: 54497775,
            album_name: "Unholy (feat. Kim Petras)",
            artist_id: 54990199,
            artist_name: "Sam Smith feat. Kim Petras",
            track_share_url:
              "https://www.musixmatch.com/lyrics/Sam-Smith-Kim-Petras/Unholy-Kim-Petras?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            track_edit_url:
              "https://www.musixmatch.com/lyrics/Sam-Smith-Kim-Petras/Unholy-Kim-Petras/edit?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            restricted: 0,
            updated_time: "2022-10-21T08:19:27Z",
            primary_genres: {
              music_genre_list: [
                {
                  music_genre: {
                    music_genre_id: 14,
                    music_genre_parent_id: 34,
                    music_genre_name: "Pop",
                    music_genre_name_extended: "Pop",
                    music_genre_vanity: "Pop",
                  },
                },
              ],
            },
          },
        },
        {
          track: {
            track_id: 249232954,
            track_name:
              "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)",
            track_name_translation_list: [],
            track_rating: 99,
            commontrack_id: 154251399,
            instrumental: 0,
            explicit: 0,
            has_lyrics: 1,
            has_subtitles: 1,
            has_richsync: 1,
            num_favourite: 133,
            album_id: 55274918,
            album_name:
              "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Single",
            artist_id: 48725448,
            artist_name: "Rihanna",
            track_share_url:
              "https://www.musixmatch.com/lyrics/Rihanna-1/Lift-Me-Up-From-Black-Panther-Wakanda-Forever-Music-From-and-Inspired-By?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            track_edit_url:
              "https://www.musixmatch.com/lyrics/Rihanna-1/Lift-Me-Up-From-Black-Panther-Wakanda-Forever-Music-From-and-Inspired-By/edit?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            restricted: 0,
            updated_time: "2022-11-04T09:18:30Z",
            primary_genres: {
              music_genre_list: [
                {
                  music_genre: {
                    music_genre_id: 14,
                    music_genre_parent_id: 34,
                    music_genre_name: "Pop",
                    music_genre_name_extended: "Pop",
                    music_genre_vanity: "Pop",
                  },
                },
              ],
            },
          },
        },
        {
          track: {
            track_id: 249728295,
            track_name: "My Mind & Me",
            track_name_translation_list: [],
            track_rating: 99,
            commontrack_id: 154674910,
            instrumental: 0,
            explicit: 0,
            has_lyrics: 1,
            has_subtitles: 1,
            has_richsync: 1,
            num_favourite: 8,
            album_id: 55448587,
            album_name: "My Mind & Me - Single",
            artist_id: 33491699,
            artist_name: "Selena Gomez",
            track_share_url:
              "https://www.musixmatch.com/lyrics/Selena-Gomez/My-Mind-Me?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            track_edit_url:
              "https://www.musixmatch.com/lyrics/Selena-Gomez/My-Mind-Me/edit?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            restricted: 0,
            updated_time: "2022-11-04T10:22:41Z",
            primary_genres: {
              music_genre_list: [
                {
                  music_genre: {
                    music_genre_id: 14,
                    music_genre_parent_id: 34,
                    music_genre_name: "Pop",
                    music_genre_name_extended: "Pop",
                    music_genre_vanity: "Pop",
                  },
                },
              ],
            },
          },
        },
        {
          track: {
            track_id: 248702035,
            track_name: "Made You Look",
            track_name_translation_list: [
              {
                track_name_translation: {
                  language: "u0",
                  translation: "Made You Look",
                },
              },
            ],
            track_rating: 99,
            commontrack_id: 153777383,
            instrumental: 0,
            explicit: 0,
            has_lyrics: 1,
            has_subtitles: 1,
            has_richsync: 1,
            num_favourite: 26,
            album_id: 55130910,
            album_name: "Takin' It Back",
            artist_id: 27082592,
            artist_name: "Meghan Trainor",
            track_share_url:
              "https://www.musixmatch.com/lyrics/Meghan-Trainor/Made-You-Look?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            track_edit_url:
              "https://www.musixmatch.com/lyrics/Meghan-Trainor/Made-You-Look/edit?utm_source=application&utm_campaign=api&utm_medium=Springboard%3A1409622828049",
            restricted: 0,
            updated_time: "2022-10-22T09:31:51Z",
            primary_genres: {
              music_genre_list: [
                {
                  music_genre: {
                    music_genre_id: 14,
                    music_genre_parent_id: 34,
                    music_genre_name: "Pop",
                    music_genre_name_extended: "Pop",
                    music_genre_vanity: "Pop",
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};

function GetSongData() {
  axios.get;
}

export { officialInfo };
