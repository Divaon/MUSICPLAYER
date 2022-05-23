var musiclist=wrapper.querySelector(".music-list");
var listmusicbtn=wrapper.querySelector("#more-music");
var hidemusicbtn=musiclist.querySelector("#close");

var changelistbtn=wrapper.querySelector("#changelist");


let nowmusic=allMusic;
let index;

listmusicbtn.addEventListener("click", ()=>{
    musiclist.classList.toggle("show");
});

hidemusicbtn.addEventListener("click", ()=>{
    listmusicbtn.click();
});



  // const ulTag = wrapper.querySelector("ul");
  // for (let i = 0; i < allMusic.length; i++) {
  //   let liTag = `<li li-index="${i + 1}">
  //                 <div class="row">
  //                   <span>${allMusic[i].name}</span>
  //                   <p>${allMusic[i].artist}</p>
  //                 </div>
  //                 <span id="${allMusic[i].src}"> </span>
  //                 <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
  //               </li>`;
  //   ulTag.insertAdjacentHTML("beforeend", liTag);
  // }


  // const allLiTag = ulTag.querySelectorAll("li");
  // for (let j = 0; j < allLiTag.length; j++) {
      
  //   if(allLiTag[j].classList.contains("playing")){
  //     allLiTag[j].classList.remove("playing");
  //   }
  //   allLiTag[j].setAttribute("onclick", "clicked(this)");
  // }

  alllistMusic();

  function clicked(element){
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; 
    loadMusic(musicIndex);
    playMusic();
    listmusicbtn.click();
  }

  let liststatus = true;


changelistbtn.addEventListener("click", ()=>{




  if (liststatus)
  {

    if (userenter)
    {
      liststatus = !liststatus;
      changelistbtn.innerText = "Choose all compositions";
      let k="";
      let t;
      getData().then((result)=>{
        // console.log("resultpr ", result)
        changelistMusic(result);
      });
    }
    
  }
  else
  {

    if (userenter)
    {

      liststatus = !liststatus;
      changelistbtn.innerText = "Choose user list";
      alllistMusic();
    }

  }
  });
  

  function changelistMusic(list){
    // console.log("list ", list);
    t=JSON.parse(list);
    // console.log("t ",t)
    const ulTag = wrapper.querySelector("ul");
    ulTag.innerHTML="";
    for (let j = 0; j < t.length; j++) {
      let i=t[j].index-1;
      // console.log("i=",i)
      let liTag = `<li li-index="${i + 1}">
                    <div class="row">
                      <span>${allMusic[i].name}</span>
                      <p>${allMusic[i].artist}</p>
                    </div>
                    <span id="${allMusic[i].src}"> </span>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                  </li>`;
      ulTag.insertAdjacentHTML("beforeend", liTag);
    }
  
  
    const allLiTag = ulTag.querySelectorAll("li");
    for (let j = 0; j < allLiTag.length; j++) {
        
      if(allLiTag[j].classList.contains("playing")){
        allLiTag[j].classList.remove("playing");
      }
      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
  }
  





  

  function alllistMusic(){
    const ulTag = wrapper.querySelector("ul");
    ulTag.innerHTML="";
    for (let i = 0; i < allMusic.length; i++) {
      let liTag = `<li li-index="${i + 1}">
                    <div class="row">
                      <span>${allMusic[i].name}</span>
                      <p>${allMusic[i].artist}</p>
                    </div>
                    <span id="${allMusic[i].src}"> </span>
                    <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                  </li>`;
      ulTag.insertAdjacentHTML("beforeend", liTag);
    }
  
  
    const allLiTag = ulTag.querySelectorAll("li");
    for (let j = 0; j < allLiTag.length; j++) {
        
      if(allLiTag[j].classList.contains("playing")){
        allLiTag[j].classList.remove("playing");
      }
      allLiTag[j].setAttribute("onclick", "clicked(this)");
    }
  }
