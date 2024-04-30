document.addEventListener("DOMContentLoaded", function () {
  const addSongVideo = document.getElementById("addSongVideo");
  const songVideos = document.getElementById("songVideosContainer");

  addSongVideo.addEventListener("click", function () {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "songVideos[]";
    newInput.required = true;
    songVideos.appendChild(newInput);
  });
});
