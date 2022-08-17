const textEl=document.getElementById("text")


const carrers=['Engineer','Doctor','Carpenter'];

let carrerindex=0;
let i=0;

let characterindex=0;
updater();

function updater()
{
    characterindex++;
    textEl.innerText=`I am a ${carrers[carrerindex].slice(0,characterindex)}`;
    if(characterindex===carrers[carrerindex].length)
    {
        carrerindex++;
        characterindex=0;
    }
    if(carrerindex===carrers.length)
    {
        carrerindex=0;
    }
    setTimeout(updater,100);
}