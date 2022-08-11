const upperEl=document.querySelector(".upper")

window.addEventListener("scroll",(event)=>
{
    updateImage();
})
function updateImage()
{
    upperEl.style.opacity=1-window.scrollY/1000
    upperEl.style.filter= "brightness("+(100-window.scrollY/10)+"%)"

    upperEl.style.backgroundSize=160-window.scrollY/12+"%";
}