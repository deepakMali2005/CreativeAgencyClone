let hamburger = document.querySelector(".hamburger-icon")
let navbar = document.querySelector(".navbar2-list")
let navbarUl = document.querySelector(".navbar2-list ul")
let close = document.querySelector(".close-icon")

hamburger.addEventListener("click", ()=>{
    navbar.style.display = "block"
})

navbarUl.addEventListener("click", ()=>{
    navbar.style.display = "none"
})

close.addEventListener("click", ()=>{
    navbar.style.display = "none"
})