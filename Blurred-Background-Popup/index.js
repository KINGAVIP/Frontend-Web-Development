const btnEl=document.querySelector(".btn")

const closebtn=document.querySelector(".close")

const containerEl=document.querySelector(".container")


const popEl=document.querySelector(".popup-container")

const emailEl=document.getElementById("email");
// Generates the pop up
btnEl.addEventListener("click",()=>{
    emailEl.value="";
    containerEl.classList.add("active")
    popEl.classList.remove("active")

})
// Close the popup
closebtn.addEventListener("click",()=>{
    popEl.classList.add("active")
    containerEl.classList.remove("active")
})