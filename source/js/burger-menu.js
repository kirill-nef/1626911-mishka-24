const navMain = document.querySelector(".main-nav")
const navToggle = document.querySelector(".main-nav__toggle")
const pageHeader = document.querySelector(".page-header")

pageHeader.classList.remove("page-header--js")
navToggle.classList.remove("main-nav__toggle--js")
navToggle.classList.remove("main-nav__toggle--open")
navToggle.classList.add("main-nav__toggle--closed")
navMain.classList.add("main-nav__mobile--closed")

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__mobile--closed")) {
    navMain.classList.remove("main-nav__mobile--closed")
    navToggle.classList.remove("main-nav__toggle--closed")
    navToggle.classList.add("main-nav__toggle--open")
  } else {
    navMain.classList.add("main-nav__mobile--closed")
    navToggle.classList.remove("main-nav__toggle--open")
    navToggle.classList.add("main-nav__toggle--closed")
  }
})
