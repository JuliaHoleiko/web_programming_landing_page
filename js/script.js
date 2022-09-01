
function toggleMenu() {
  if (document.getElementById("nav-links").classList.contains("open")) {
    document.getElementById("nav-links").classList.remove("open");
  } else {
    document.getElementById("nav-links").classList.add("open");
  }
}