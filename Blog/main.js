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
});



const rightbtn=document.querySelector(".show-aside-button");
const leftbtn=document.querySelector(".hide-aside-button");
const asider=document.querySelector(".aside");

rightbtn.addEventListener("click",()=>{
    rightbtn.style.display='none';
    asider.style.display='block';
    leftbtn.style.display='block';
})
leftbtn.addEventListener("click",()=>{
    leftbtn.style.display='none';
    asider.style.display='none';
    rightbtn.style.display='block';
})

const activeli=document.querySelectorAll(".aside ul li");
const updateactive=()=>{
    activeli.forEach(item=>{
        item.classList.remove("active");
    })
}

activeli.forEach(ele => {
    ele.addEventListener("click",()=>{
        updateactive();
        ele.classList.add("active");
    })
});