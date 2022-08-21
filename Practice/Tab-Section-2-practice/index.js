const tabEl=document.querySelector(".tabs");

const btnEl=document.querySelectorAll(".btn");

const contentEl=document.querySelectorAll(".content")
tabEl.addEventListener("click",(event)=>{
    const id=event.target.dataset.id;
    if(id)
    {
        console.log(id);
        btnEl.forEach((btn)=>
        {
            btn.classList.remove("live");
        })
        event.target.classList.add("live");
        const ele=document.getElementById(id);
        console.log(ele);
        contentEl.forEach((content)=>{
            content.classList.remove("live");
        })
        ele.classList.add("live");

    }
})