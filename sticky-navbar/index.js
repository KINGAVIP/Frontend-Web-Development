
const navEl=document.querySelector(".navbar")

const textEl=document.querySelector(".text")
const introEl=document.querySelector(".intro")
window.addEventListener("scroll",()=>
{

    // console.log(window.scrollY)
    // console.log(introEl.offsetHeight-navEl.offsetHeight-100)
    //changes color of navbar when we just clear our upper class image
    if(window.scrollY>introEl.offsetHeight-navEl.offsetHeight)
    {
        navEl.classList.add("active");
    }
    else{
        navEl.classList.remove("active")
    }
})