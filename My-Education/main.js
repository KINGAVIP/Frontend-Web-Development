window.addEventListener("scroll",()=>{
    // if(window.scrollY>0)
    //     document.querySelector("nav").classList.add("effector");
    // else
    //     document.querySelector("nav").classList.remove("effector");

        //or simply
    document.querySelector("nav").classList.toggle("effector",window.scrollY>0)
});
const quesEl=document.querySelectorAll(".questions");
quesEl.forEach(ques =>{
    ques.addEventListener('click',()=>{
        ques.classList.toggle("show")

        const iconel=ques.querySelector(".ques i");
        if(iconel.className==='fa-solid fa-plus')
            iconel.className='fa-solid fa-minus'
        else
            iconel.className='fa-solid fa-plus'
    })
})