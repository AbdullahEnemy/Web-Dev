const resetBtn = document.getElementById("reset");
const playBTn = document.getElementById("play");
const timerEl = document.getElementById("timer");

const root = document.querySelector(":root");

const totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
timerEl.innerText = formatTime(totalSeconds);
const timerInterval = setInterval(run, 1000);

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${newSeconds
    .toString()
    .padStart(2, "0")}`;
}
playBTn.addEventListener("click", () => {
  playing = !playing;
  playBTn.classList.toggle("play");
  playBTn.classList.toggle("bg-green-500");
  const playIcon = playBTn.querySelector("i");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
});
resetBtn.addEventListener("click", resetTimer);
function run() {
  if (playing) {
    currentSeconds -= 1;
    if (currentSeconds <= 0) {
      clearInterval(timerInterval);
      resetTimer();
    }
    timerEl.innerText = formatTime(currentSeconds);
    root.style.setProperty("--degrees", calDeg());
  }
}
function calDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}
function resetTimer() {
  playing = false;
  playBTn.classList.remove("play");
  playBTn.classList.remove("bg-green-500");
  const playIcon = playBTn.querySelector("i");
  playIcon.classList.add("fa-play");
  playIcon.classList.remove("fa-pause");
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  r;
  root.style.setProperty("--degrees", "0deg");
}
