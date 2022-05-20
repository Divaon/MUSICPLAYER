let logins =
[
    "divaon", 
    "123"
];




// var curentuser= JSON.parse(localStorage.getItem("myKey"));
// localStorage.setItem("myKey",JSON.stringify(curentuser));
//localStorage.setItem("logins", JSON.stringify(logins)) ;



//localStorage.setItem("Items", JSON.stringify(logins)) ;
logins = JSON.parse(localStorage.getItem("Items"));


console.log(typeof(logins)); 
console.log(logins); 


let curentuser = localStorage.getItem('user_saved') || "smth";


const adm = document.querySelector(".adm"),
musiclog = document.querySelector("#logininput"),
enter = document.querySelector(".logine");
reg = document.querySelector(".register");
musicpassword = document.querySelector("#passwordinput");
nickname=document.querySelector("#nameuser")




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






