var transition = document.getElementsByClassName("transitionscreen")[0]
var track = document.getElementById("track")
var dark = false
transition.addEventListener("animationend", function() {
  if(dark)
    document.body.style.backgroundColor = "#0a0a0a"
  else
    document.body.style.backgroundColor = "white"
});
function Clicked(element) {
  dark = !dark
  if(dark)
    document.title = "dark mode...";
  else
    document.title = "light mode!!! ōۃō";
  transition.classList.toggle("dark")
  transition.classList.toggle("light")
  element.classList.toggle("switched")
  track.classList.toggle("switched")
}
