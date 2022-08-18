const inputEl=document.querySelector(".input");
// inputEl.innerHTML=NaN;
const bodyEl=document.querySelector("body");

// inputEl.checked=true;
inputEl.checked=JSON.parse(localStorage.getItem("mode"));
update();

function update()
{
    console.log(inputEl.checked)
    if(inputEl.checked){
        bodyEl.style.background='black';
    }
    else{
        bodyEl.style.background='white';
    }
    
}

inputEl.addEventListener("input",()=>{
    update();
    updatelocalstorage();
})
function updatelocalstorage()
{
    localStorage.setItem("mode",JSON.stringify(inputEl.checked))
}