const bodyEl=document.querySelector("body");
const welcmEl=document.querySelector("h2")
document.addEventListener("keyup",(event)=>{
    if(event.code=='Space')
    {
        // console.log("prese");
        welcmEl.remove();
        play(); 

    }
})
function play()
{
    bodyEl.addEventListener("mousemove",(event)=>{
        const posx=event.offsetX;
        const posy=event.offsetY;
        const spanEl=document.createElement("span");
        // console.log("created");
        spanEl.style.top=posy+"px";
        spanEl.style.left=posx+"px";
        const size=Math.random()*100;
        spanEl.style.width=size+"px";
        spanEl.style.height=size+"px"; 
    
        bodyEl.appendChild(spanEl);
           
        setTimeout(()=>{
            spanEl.remove();
        },3000);
    });
}
