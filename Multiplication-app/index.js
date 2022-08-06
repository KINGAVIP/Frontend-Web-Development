const num1=+Math.ceil(Math.random()*20)
const num2=+Math.ceil(Math.random()*20)

const quesEl=document.getElementById("question")
quesEl.innerText="What is "+num1+" Multiply by "+num2;

const ansEl=document.getElementById("ans")
const formEl=document.getElementById("form")

const correct=num1*num2;
const scoreEl=document.getElementById("score")

let score=JSON.parse(localStorage.getItem("score"));
if(!score)
{
    score=0;
}

scoreEl.innerText="score:"+score;

formEl.addEventListener("submit",()=>{
    const ans=+ansEl.value
    if(ans==correct)
    {
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
    // console.log(score);

});

function updateLocalStorage()
{
    localStorage.setItem("score",JSON.stringify(score))
}