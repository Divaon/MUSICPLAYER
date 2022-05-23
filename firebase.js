var nickname=document.querySelector("#nameuser");
var userenter=false;
var useruid;
var databaseref;
var likebutton = document.querySelector("#likedislike");
        
        // Import the functions you need from the SDKs you need
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyCKFsCChb9mlTV1v-NT_8FUSysj9kH3mtk",
          authDomain: "autorization-350818.firebaseapp.com",
          projectId: "autorization-350818",
          storageBucket: "autorization-350818.appspot.com",
          messagingSenderId: "490521543967",
          appId: "1:490521543967:web:df9c8a794de6a1a1275c2a",
          measurementId: "G-BEC80WQCVS",
          databaseURL: "https://autorization-350818-default-rtdb.europe-west1.firebasedatabase.app/"
        };
      
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        const auth = firebase.auth()
        const database = firebase.database()

        let t=[        ];


        let objectt = JSON.stringify(t);


        function register () {
            email = document.getElementById('email').value
            password = document.getElementById('password').value
          
            auth.createUserWithEmailAndPassword(email, password)
            .then(function() {
              var user = auth.currentUser
              var database_ref = database.ref()
          
              var user_data = {
                email : email,
                list: objectt,
                last_login : Date.now()
              }          
              database_ref.child('users/' + user.uid).set(user_data)
            //   console.log("catch")

              alert('User Created!!')
            })

          }
          


          




          function login () {
            email = document.getElementById('email').value
            password = document.getElementById('password').value
          
            auth.signInWithEmailAndPassword(email, password)
            .then(function() {
              var user = auth.currentUser
              nickname.innerText=email;
              var database_ref = database.ref()
              var user_data = {
                last_login : Date.now()
              }
              database_ref.child('users/' + user.uid).update(user_data)
              databaseref=database_ref;
              useruid=user.uid;
              alert('User Logged In!!')
            })
            userenter=true;
        
          }




likebutton.addEventListener("click", ()=>{


    getData().then((result)=>{
        // console.log("resultpr ", result)
        let t=JSON.parse(result);
        add=musicIndex;
        // console.log(musicIndex, " index");
        let adding=true;
        let deletes=0;

        // console.log("start")
        for (let i=0; i<t.length; i++)
        {
            k=t[i]
            // console.log(t[i], typeof(t[i]));
            // console.log(add, typeof(add));
            // console.log(t[i]=={index: add}, {index: add}, t[i]);
            // console.log("new");

            if (t[i].index==add)
            {
                adding=false;
                deletes=i;
            }
        }
        // console.log("end")

        if (adding)
        {

            t.push({index: add})
            // console.log("t=",typeof(t), t)
            let objectt = JSON.stringify(t);
            // console.log(objectt)
            var database_ref = database.ref()
            var user_data = {
                list: objectt
              }     
              database_ref.child('users/' + useruid).update(user_data)
            
        }
        else
        {
            t.splice(deletes,1);
            let objectt = JSON.stringify(t);
            var database_ref = database.ref()
            var user_data = {
                list: objectt
              }     
              database_ref.child('users/' + useruid).update(user_data)
        }


        });

    //     let objectt = JSON.stringify(t);



});





// playpausebtn.addEventListener("click", ()=>{
//     const isMusicPaused=wrapper.classList.contains("paused");
//     isMusicPaused ? pauseMusic() : playMusic();
//   });

var res="";
function getData() {
    return firebase.database().ref('users/'+useruid+'/').once('value').then(function(bref){
            var childdata = bref.val();
            var res=bref.val().list;
            // console.log("1111")
            // console.log("3 ", typeof(childdata[useruid]['list']));
            // console.log("1111")
            // res=childdata[useruid]['list'];
            // console.log("444   ",res);
            return res;
        });
}


// export(useruid, databaseref);