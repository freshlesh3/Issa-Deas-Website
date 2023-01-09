const audio = document.getElementById("audio");
const playButton = document.querySelector(".play-button");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const duration = document.querySelector(".duration");

playButton.addEventListener("click", togglePlay);
audio.addEventListener("timeupdate", updateProgress);

function togglePlay() {
if (audio.paused) {
audio.play();
playButton.src = "pause-button.png";
} else {
audio.pause();
playButton.src = "play-button.png";
}
}

function updateProgress() {
const currentTime = audio.currentTime;
const durationTime = audio.duration;
const percentage = (currentTime / durationTime) * 100;

progress.style.width = ${percentage}%;
duration.innerHTML = formatTime(durationTime - currentTime);
}

function formatTime(time) {
const minutes = Math.floor(time / 60);
const seconds = Math.floor(time % 60);
return ${minutes}:${seconds};
}