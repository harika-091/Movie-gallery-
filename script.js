
window.onload = function() {
  alert("Welcome to the Movie Gallery! 🎬");
};
const movies = document.querySelectorAll(".movie p");
movies.forEach(movie => {
  movie.addEventListener("click", () => {
    movie.style.color = "yellow";
  });
});
