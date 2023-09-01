let playBtn = document.querySelector(".play-btn");
let pauseBtn = document.querySelector(".pause-btn");
let videoTab = document.querySelector(".bg-video");

playBtn.addEventListener("click", ()=>{
    videoTab.play();
})
pauseBtn.addEventListener("click",()=>{
    videoTab.pause();
})
