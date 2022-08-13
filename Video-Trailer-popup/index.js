const btnEl=document.querySelector(".btn");
const closeEl=document.querySelector(".close");

const videoEl=document.querySelector("video")



const trailerEl=document.querySelector(".trailer-container");
btnEl.addEventListener("click",()=>{
    trailerEl.classList.remove("active");   
    videoEl.pause();
    videoEl.currentTime=0;
});

closeEl.addEventListener("click",()=>{
    trailerEl.classList.add("active");
});


