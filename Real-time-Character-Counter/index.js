const textEl=document.getElementById("texts")
const TotalEl=document.getElementById("Total")
const RemainingEl=document.getElementById("Remaining")
updateScore()
textEl.addEventListener("keyup",()=>{

    updateScore();
})
function updateScore()
{

    TotalEl.innerText=textEl.value.length

    RemainingEl.innerText=textEl.getAttribute("maxlength")-textEl.value.length
   

}