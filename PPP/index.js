window.addEventListener("scroll",()=>{
    if(window.scrollY>0)
    {
        document.querySelector(".nav__2").classList.add("newnav");
        document.querySelector(".nav-1").classList.add("newnav");
        
    }
    else
    {
        document.querySelector(".nav__2").classList.remove("newnav");
        document.querySelector(".nav-1").classList.remove("newnav");
    }
})