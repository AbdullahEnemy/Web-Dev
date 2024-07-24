const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selected = "Satisfied";
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
  }
  selected = e.target.nextElementSibling.innerHTML;
});
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `<i class='fas fa-heart'></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${selected}</strong>
      <p>We'll use your feedback to improve our service.</p>`;
});
