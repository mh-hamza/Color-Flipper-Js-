
//Select Elements
const colors = ["red","green","blue","cyan","yellow", "purple","lime","maroon","orange","blue","crimson","gray","teal","coral"]
const btn = document.querySelector(".btn")
const colortext= document.querySelector(".color-text")

//Genrate Random Number
function getRandomNumber(){
    return Math.floor(Math.random()* colors.length)
}

//On click to Change Color Function
btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber]
    colortext.style.color= colors[randomNumber]
    colortext.innerText=colors[randomNumber]
})