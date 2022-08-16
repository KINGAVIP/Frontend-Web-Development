const sliderEl=document.querySelector(".slider");

var i=0;
var r=237;
// i=i+1;
let timeout;
const leftbtnEl=document.querySelector(".left");

const rightbtnEl=document.querySelector(".right");
function changer()
{

    // console. log(r);
    sliderEl.style.backgroundImage=`url(https://picsum.photos/id/${r+i}/400)`
    timeout=setTimeout(()=>
    {
        i=i+1;
        changer();
    },2000);
}

leftbtnEl.addEventListener("click",()=>
{
    i=i-1;
    clearTimeout(timeout);
    changer();
});

rightbtnEl.addEventListener("click",()=>{
    i=i+1;
    clearTimeout(timeout);
    changer();
    
})
changer();