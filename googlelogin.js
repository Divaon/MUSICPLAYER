let curentuser = "smth";
nickname=document.querySelector("#nameuser")
console.log(curentuser);
curentuser = localStorage.getItem('user_saved') || "smth";


console.log(curentuser);

window.addEventListener("load", ()=>{
    if (nickname != null){
    nickname.innerText=curentuser;
    }
  });





function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#nameyser").text(profile.getName());
    localStorage.setItem('user_saved', profile.getName());
    $(".g-signin2").css("display", "none");
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}