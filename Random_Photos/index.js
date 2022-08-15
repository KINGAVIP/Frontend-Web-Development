const containerEl=document.querySelector(".container");

const bodyEl=document.querySelector("body")

const btnEl=document.querySelector(".btn");

let size=15;
btnEl.addEventListener("click",()=>{
    creator();
})
function creator()
{
    for (let index = 0; index < size; index++) {
        const ele=document.createElement("div")
        ele.classList.add   ("images")
        const r=Math.floor(Math.random()*1000+index);
        ele.style.backgroundImage=`url(https://picsum.photos/500/300?random=${r})`
        
        // console.log(size)
        containerEl.appendChild(ele)    
    }
}

creator();
