/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Abbas Sajjad Hussein
 *      Student ID: 134246222
 *      Date:       11/16/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

//event handler
window.addEventListener("load", function () {
  //buttons to choose an artist
  const artistOption = document.getElementById("menu");

  const cardContainer = document.getElementById("songs");

  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.addEventListener("click", () => show(artist));
    artistOption.appendChild(button);
  });

  //show the songs... but automatically show the first one first
  show(artists[0]);

  function show(artist) {
    const artistChosen = document.getElementById("selected-artist");
    const makeTable = document.getElementById("songs");

    //show name and links of the artist
    artistChosen.innerHTML = `${artist.name} (${artist.urls
      .map((link) => `<a href="${link.url}" target="_blank">${link.name}</a>`)
      .join(", ")})`;

    //clear present rows
    makeTable.innerHTML = "";

    //filter songs for the artist and do not show the flagged songs
    const artistSongs = songs.filter((song) => song.artistId === artist.artistId && !song.explicit);
    makeSongCard(artistSongs);
  }

  //starting here...
  function makeSongCard(songs) {
    cardContainer.innerHTML = "";
    songs.forEach((song) => {
      const card = createSongCard(song);
      cardContainer.appendChild(card);
    });
  }

  //create the song
  function createSongCard(song) {
    //create <div>
    const card = document.createElement("div");
    //adding it...
    card.classList.add("card");

    // Create a song image, use the .card-image class
    const songImg = document.createElement("img");
    songImg.src = song.imageUrl;
    songImg.classList.add("card-image");
    card.appendChild(songImg);

    const title = document.createElement("h2");
    title.textContent = song.title;

    const year = document.createElement("p");
    year.textContent = `Year: ${song.year}`;

    const duration = document.createElement("p");
    duration.textContent = `Duration: ${formatDuration(song.duration)}`;

    card.appendChild(title);
    card.appendChild(year);
    card.appendChild(duration);

    card.addEventListener("click", () => window.open(song.url, "_blank"));

    //returning card
    return card;
  }

  //for the minutes and seconds
  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
});
