let logins =
[
    "divaon", 
    "123"
];


logins = JSON.parse(localStorage.getItem("Items"));




let curentuser = localStorage.getItem('user_saved') || "smth";


const adm = document.querySelector(".adm");
var musiclog = document.querySelector("#logininput");
var enter = document.querySelector(".logine");
var reg = document.querySelector(".register");
var musicpassword = document.querySelector("#passwordinput");
var nickname=document.querySelector("#nameuser");




window.addEventListener("load", ()=>{
    if (nickname != null){
    nickname.innerText=curentuser;
    }
  });


if (enter!=null){  
enter.addEventListener("click", ()=>{

for (let i = 0; i < logins.length; i++)
    { 
    if (musiclog.value == logins[i])
        {
        curentuser=musiclog.value;
        href='index.html';
        localStorage.setItem('user_saved', curentuser);
        document.location.replace("index.html");
        }
    }
});
}



if (reg!=null){ 
    reg.addEventListener("click", ()=>{


        if (logins.length == 0)
        {
        for (let i = 0; i < logins.length; i++)
            { 
            if (musiclog.value == logins[i])
                {
                }
            }
        }
        logins.push(musiclog.value)
        localStorage.setItem("Items", JSON.stringify(logins)) ;
        document.location.replace("index.html");
        console.log(logins);

    });
    }






