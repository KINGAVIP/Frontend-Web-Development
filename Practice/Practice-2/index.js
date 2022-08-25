const menu=document.querySelector("nav .container ul")
const closebtn=document.getElementById("close");
const menubtn=document.getElementById("menu");

menubtn.addEventListener("click",()=>{
    menubtn.style.display='none';
    menu.style.display='block';
    closebtn.style.display='inline-block';
})
closebtn.addEventListener("click",()=>{
    menubtn.style.display='inline-block';
    menu.style.display='none';
    closebtn.style.display='none';
})


const morebtn=document.querySelector(".more");
const more_content=document.querySelector(".read-more");
morebtn.addEventListener("click",()=>{
    more_content.classList.toggle("show");
    if(more_content.classList.contains("show"))
    {
        morebtn.textContent='Show Less';
    }
    else{
        morebtn.textContent='Show more';
    }
})

const skillsel=document.querySelectorAll("section.skills .skill");
skillsel.forEach(skill=>{
    skill.querySelector(".upper").addEventListener("click",()=>{
        skill.querySelector(".lower").classList.toggle("open");
    })
})