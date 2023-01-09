Tracks.js
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

<!-- Audio Player button -->
  <><script>
    const audio = document.getElementById("audio"); // get the audio element from the DOM
    const progressBar = document.getElementById("progress-bar"); // get the progress bar element from the DOM
    const duration = document.getElementById("duration"); // get the duration display element from the DOM

    // add an event listener for the 'loadedmetadata' event, which is fired when the metadata for the audio file has been loaded
    audio.addEventListener("loadedmetadata", function() {duration.innerHTML = formatTime(audio.duration)}// update the duration display with the duration of the audio file
    ; // update the duration display with the duration of the audio file
    {"}"});

    // add an event listener for the 'timeupdate' event, which is fired at a regular interval as the audio plays
    audio.addEventListener("timeupdate", function() {progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%"}// update the width of the progress bar
    ; // update the width of the progress bar
    duration.innerHTML = formatTime(audio.currentTime); // update the duration display with the current time of the audio
    {"}"});

    // convert the time in seconds to a formatted string in the format 'minutes:seconds'
    function formatTime(time) {let} minutes = Math.floor(time / 60); // calculate the number of minutes
    let seconds = Math.floor(time % 60); // calculate the number of seconds
    if (seconds < /> 10) {// if the number of seconds is less than 10
      seconds = "0" + seconds}// add a leading zero
    ; // add a leading zero
    {"}"}

    return minutes + ":" + seconds; // return the formatted time string
    {"}"}

  </script>