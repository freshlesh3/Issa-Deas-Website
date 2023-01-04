<script>
  // Get references to the audio element, the progress bar, and the duration element
  const audio = document.getElementById("audio");
  const progressBar = document.getElementById("progress-bar");
  const duration = document.getElementById("duration");

  // When the audio file's metadata has been loaded, update the duration element with the total duration of the audio file
  audio.addEventListener("loadedmetadata", function() {
    duration.innerHTML = formatTime(audio.duration);
  });

  // While the audio file is playing, update the width of the progress bar and the duration element with the current time of the audio file
  audio.addEventListener("timeupdate", function() {
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    duration.innerHTML = formatTime(audio.currentTime);
  });

  // Format the given time (in seconds) as a string in the format "mm:ss"
  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
</script>
