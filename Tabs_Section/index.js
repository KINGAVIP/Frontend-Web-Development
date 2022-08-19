const btnEl=document.querySelectorAll(".btn");

const tabsEl=document.querySelector(".tabs")
console.log("5")

const contentEl=document.querySelectorAll(".content")
tabsEl.addEventListener("click",(event)=>{
    const id=event.target.dataset.id
    if(id)
    {
        btnEl.forEach((btn)=>{
            btn.classList.remove("live")
        })
        event.target.classList.add("live")
        contentEl.forEach((content)=>{
            content.classList.remove("live");
        })
        console.log(id);
        const ele=document.getElementById(id);
        // console.log(ele.);
        ele.classList.add("live")
        // const element=ele.target;
        // console.log(element)
        // ele.target.classList.add("live");

    }
})