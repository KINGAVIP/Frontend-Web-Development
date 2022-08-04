const hourel=document.getElementById("hour")
const minel=document.getElementById("minute")
const secel=document.getElementById("second")
const ampmel=document.getElementById("ampm")


function updateClock()
{
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="am";

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }
    hourel.innerText=h;
    minel.innerText=m;
    secel.innerText=s;
// infinte loop for our digital clock
    setTimeout(()=>
    updateClock()
    )



}
updateClock()