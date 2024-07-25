const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const userName = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Enemy",
    position: "CEO",
    photo:
      "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
    text: "CEO enemy.dev",
  },
  {
    name: "Hassan Khan",
    position: "CTO",
    photo:
      "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
    text: "CTO enemy.dev",
  },
  {
    name: "Sadeem",
    position: "CFO",
    photo:
      "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
    text: "CFO enemy.dev",
  },
  {
    name: "Waqas bin Abbas",
    position: "Co-CEO",
    photo:
      "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
    text: "Co-CEO enemy.dev",
  },
  {
    name: "Owais",
    position: "MD",
    photo:
      "https://images.unsplash.com/photo-1615104603156-3dc403ca7cc8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww",
    text: "MD enemy.dev",
  },
];
let idx = 1;
function updateTestimonail() {
  console.log(testimonials[idx]);
  const { name, position, photo, text } = testimonials[idx];
  testimonial.innerHTML = text;
  userImage.scr = photo;
  userName.innerHTML = name;
  role.innerHTML = position;
  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}
setInterval(updateTestimonail, 10000);
