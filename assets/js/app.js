
var navbar = document.querySelector(".nav-links");

document.querySelector(".showMenu").addEventListener("click",()=>{
  navbar.classList.add("show-nav-links");
});
document.querySelector(".hideMenu").addEventListener("click",()=>{
  navbar.classList.remove("show-nav-links");
});
