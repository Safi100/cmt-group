const hamburger_btn = document.querySelector('.hamburger')
const nav = document.querySelector(".navbar")
const lang = document.querySelector(".current_language")
const language_container = document.querySelector(".choose_language")
function show_hide_menu(){
    // hamburger_btn
    if(nav.classList.contains("show") == false){
        document.querySelectorAll(".hamburger span")[0].classList.add("dropDownFirstArrow")
        document.querySelectorAll(".hamburger span")[1].classList.add("dropDownSecondArrow")
        document.querySelectorAll(".hamburger span")[2].classList.add("dropDownThirdArrow")
    }else{
        document.querySelectorAll(".hamburger span")[0].classList.remove("dropDownFirstArrow")
        document.querySelectorAll(".hamburger span")[1].classList.remove("dropDownSecondArrow")
        document.querySelectorAll(".hamburger span")[2].classList.remove("dropDownThirdArrow")
    }
    // Navbar
    (nav.classList.contains("show"))  ? nav.classList.remove("show") : nav.classList.add("show")
}



hamburger_btn.addEventListener('click' , show_hide_menu )
