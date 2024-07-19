const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
setTimeout(getData, 2500);
function getData() {
  header.innerHTML = `
        <img src='https://images.unsplash.com/photo-1721265576553-e7f8242fc915?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8'
          alt=''
        />`;
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML = "Lorem ipsum dolor sit amet";
  profile_img.innerHTML = `<img src="https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=" alt="" />`;
  name.innerHTML = "Enemy";
  date.innerHTML = "Nov 14, 2004";
  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bg_text.forEach((bg_text) => {
    bg_text.classList.remove("animated-bg-text");
  });
}
