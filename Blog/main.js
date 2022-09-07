const menubtn=document.querySelector(".menu");
const closebtn=document.querySelector(".close");
const menu=document.querySelector(".nav__container ul");

menubtn.addEventListener("click",()=>{
    menu.style.display='flex';
    menubtn.style.display='none';
    closebtn.style.display='inline-block'
})
closebtn.addEventListener("click",()=>{
    menu.style.display='none';
    menubtn.style.display='inline-block';
    closebtn.style.display='none';
})

