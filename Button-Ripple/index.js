const btnEl=document.querySelector(".btn")
btnEl.addEventListener("mouseover",(event)=>
{
    const x=(event.pageX-btnEl.offsetLeft);
    const y=(event.pageY-btnEl.offsetTop);
    if(x<60 && y<25)
    {
        var col="blue";
    }
    else if(x>60 && y<25)
    {
        var col="yellow";
    }
    else if(x<60 && y>25)
    {
        var col="red";
    }
    else
    {
        var col="white";
    }
    btnEl.style.setProperty("--varx", x+"px");
    btnEl.style.setProperty("--vary", y+"px");
    btnEl.style.setProperty("--col", col);
    console.log(event.pageX-btnEl.offsetLeft);
    console.log(event.pageY-btnEl.offsetTop);
})