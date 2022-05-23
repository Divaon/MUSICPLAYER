var playpausebtn = wrapper.querySelector(".play");
let isMusicPaused = true;






function playMusic()
{
  wrapper.classList.add("paused");
  isMusicPaused = false;
  musicAudio.play();
}

function pauseMusic()
{
  wrapper.classList.remove("paused");
  isMusicPaused = true;
  musicAudio.pause();
}


playpausebtn.addEventListener("click", ()=>{
  // console.log("work");
  //let isMusicPaused=wrapper.classList.contains("paused");
  // console.log(isMusicPaused);
  // console.log(isMusicPaused);
  // isMusicPaused ? pauseMusic() : playMusic();
  // console.log(isMusicPaused);
        const isMusicPaused=wrapper.classList.contains("paused");
        isMusicPaused ? pauseMusic() : playMusic();
    //   });
});



