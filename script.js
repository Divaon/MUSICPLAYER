const wrapper = document.querySelector(".wrapper");
var musicName = wrapper.querySelector(".song-details .name");
var musicArtist = wrapper.querySelector(" .artist");
var musicAudio = wrapper.querySelector("#main-audio")


var login = false;



let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load", ()=>{
  loadMusic(musicIndex);
});

function loadMusic(indexNumb){


  musicName.innerHTML = allMusic[indexNumb - 1].name;
  musicArtist.innerHTML = allMusic[indexNumb - 1].artist;
  musicAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

