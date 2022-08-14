const kits=['Crash','Kick','Snare','Tom']

const containerEl=document.querySelector(".container")

// const btnEl=document.querySelector("btn")
kits.forEach((kit)=>{
    const btnEl=document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.innerText=kit;
    btnEl.style.backgroundImage="url(Images/"+kit+".png)";
    containerEl.appendChild(btnEl);   
    const audioEl=document.createElement("audio")
    audioEl.src="Sounds/"+kit+".mp3";

    containerEl.appendChild(audioEl);
    // audioEl.src="C:\Users\AVI\Desktop\HTML_CSS_JS\Drum-Kits\Sounds\Tom.mp3"
    // audioEl.play();
    btnEl.addEventListener("click",()=>{
        audioEl.play();
    });
    window.addEventListener("keydown",(event)=>{
        if((event.key)==kit.slice(0,1))
        {
            audioEl.play() ;
            btnEl.style.transform="scale(.9)";
            setTimeout(()=>{
                btnEl.style.transform="scale(1)"
            },100)
        };
    })
})
