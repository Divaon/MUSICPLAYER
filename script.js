const wrapper = document.querySelector(".wrapper");
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist"),
musicAudio = wrapper.querySelector("#main-audio")


login = false;


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
});

function loadMusic(indexNumb){
  musicName.innerHTML = allMusic[indexNumb - 1].name;
  musicArtist.innerHTML = allMusic[indexNumb - 1].artist;
  musicAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}
