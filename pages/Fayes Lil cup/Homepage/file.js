// grabbing items on a page lesson****

// console.log(document.title)
// //changes title
// document.title="Molly"

// console.log(document.querySelector("h1"))
const ourmain=document.querySelector("main")
// console.log(ourh1)
// // ourh1.style.backgroundColor="#444555"
// const grabWalk=document.querySelector(".takeWalk")

const button=document.querySelector("button")
function pressButton(){
    ourh1.classList.toggle("dark")
    
}
button.addEventListener("click",pressButton)
//ourh1.classList.add("dark")
