const colorEl=document.querySelector(".colors");
const containerEl=document.querySelector(".container")
//creating the no. or boxes we want and setting colors we want
for (let index = 0; index <30;index++ ){
    const colEl=document.createElement("div");
    colEl.classList.add("colors");    
    let x=randomcolors();
    colEl.style.background=x;
    colEl.innerText=x;
    containerEl.appendChild(colEl);
}
// randomcolors()
function randomcolors()
{
    const chars="0123456789abcdef"
    const colorlength=6;
    let color="";
    color+='#';

    for(let i=0;i<6;i++)
    {
        let num=Math.floor(Math.random()
        *chars.length);
        let c=chars[num];
        color+=c
    }
    console.log(color);
    return color;
}