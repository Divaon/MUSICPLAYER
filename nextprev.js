var prevbtn=wrapper.querySelector(".prev");
var nextbtn=wrapper.querySelector(".next");
var repeatbtn=wrapper.querySelector(" .repeat");
var changelistbtns=wrapper.querySelector("#changelist");

let circle=false;
var lists=[]

fulllist(); 




function fulllist(){
    lists=[];
  for(let i = 0; i<allMusic.length; i++)
  {
      lists.push(i+1)
  }
}


function userlist(){
    lists=[];
    console.log("userbefore ", lists);
    getData().then((result)=>{
        t=JSON.parse(result);
        userlist2(result);
    });
}


function userlist2(result){
    t=JSON.parse(result);
    console.log(t, "    result")
    for (let j = 0; j < t.length; j++) {
        let i=t[j].index;
        console.log(i, " i")
        lists.push(i);
    }
    console.log("list after", lists);
}

let liststatuss = false;
changelistbtns.addEventListener("click", ()=>{



    if (userenter)
    {
    }

    console.log("hi");
    if (liststatuss)
    {
        if (userenter)
        {
            liststatuss = !liststatuss;
            fulllist(); 
        }
    }
    else
    {
        if (userenter)
        {
            liststatuss = !liststatuss;
            userlist();
        }

    }
    });
    


function prevMusic()
{

    // console.log("lists prev  ",lists)
    musicIndex--;
    if (musicIndex < 1)
    {
        musicIndex=allMusic.length;
    }

    for (let i=0; i<lists.length; i++)
    {
        if (lists[i]==musicIndex)
        {
            loadMusic(musicIndex);
            playMusic();
            return;
        }
    }
    console.log(lists.length, "listlength")
    if (lists.length == 0)
    {
        loadMusic(musicIndex);
        playMusic();
        return;
    }

    prevMusic()
}
function nextMusic()
{
    // console.log("lists next  ",lists)
    musicIndex++;
    if (musicIndex > allMusic.length)
    {
        musicIndex=1;
    }
    for (let i=0; i<lists.length; i++)
    {
        if (lists[i]==musicIndex)
        {
            loadMusic(musicIndex);
            playMusic();
            return;
        }
    }
    console.log(lists.length, "listlength")
    if (lists.length == 0)
    {
        loadMusic(musicIndex);
        playMusic();
        return;
    }



    nextMusic()
}

// let str = 3 + 3 + "5"
// console.log(str)
prevbtn.addEventListener("click", ()=>{
    prevMusic();
  });
nextbtn.addEventListener("click", ()=>{
    nextMusic();
  });



musicAudio.addEventListener("ended", ()=>{
    if (circle == false)
    {
        nextMusic(); 
    }
    else
    {
        playMusic();
    }
});

repeatbtn.addEventListener("click", ()=>{
    circle = !circle;
});

 


