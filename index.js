var firebaseConfig = {
    apiKey: "AIzaSyCDgHvlLs437GYtMvz_FFF4M7JtRmcb-bA",
    authDomain: "daily-three-3.firebaseapp.com",
    databaseURL: "https://daily-three-3.firebaseio.com",
    projectId: "daily-three-3",
    storageBucket: "daily-three-3.appspot.com",
    messagingSenderId: "434367192714",
    appId: "1:434367192714:web:9c63d330659c1dcb105773",
    measurementId: "G-VZDSX8EEBF"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('up and running')
var db = firebase.firestore();
var count

var cycleTwo = function(){
    if(count%3==0){
       var unsub = db.collection("count").doc("BC")
            .onSnapshot(function(doc) {
                if(doc.data().BC != 0){
                    document.getElementById("key").innerHTML= Math.pow(doc.data().BC,val)%n;            
                }
            });
    }
    
    if(count%3==1){
        var unsub =db.collection("count").doc("AC")
            .onSnapshot(function(doc) {
                if(doc.data().AC != 0){
                    document.getElementById("key").innerHTML=Math.pow(doc.data().AC,val)%n;      
                }
            });
    }
    
    if(count%3==2){
        var unsub =  db.collection("count").doc("AB")
            .onSnapshot(function(doc) {
                if(doc.data().AB != 0){
                    document.getElementById("key").innerHTML=Math.pow(doc.data().AB,val)%n;       
                }
            });
    }
}


var cycleOne = function(){
    if(count%3==0){
       var unsub = db.collection("count").doc("A")
            .onSnapshot(function(doc) {
                if(doc.data().A != 0){
                    db.collection("count").doc("AC").set({
                        AC:Math.pow(doc.data().A,val)%n
                    }).then(function(){
                        unsub()
                    })                   
                }
            });
    }
    
    if(count%3==1){
        var unsub =db.collection("count").doc("B")
            .onSnapshot(function(doc) {
                if(doc.data().B != 0){
                    db.collection("count").doc("AB").set({
                        AB:Math.pow(doc.data().B,val)%n
                    }).then(function(){
                        unsub()
                    })                  
                }
            });
    }
    
    if(count%3==2){
        var unsub =  db.collection("count").doc("C")
            .onSnapshot(function(doc) {
                if(doc.data().C != 0){
                    db.collection("count").doc("BC").set({
                        BC:Math.pow(doc.data().C,val)%n
                    }).then(function(){
                        unsub()
                    })                   
                }
            });
    }
    cycleTwo()
}
var updateCount =function(){
    db.collection("count").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            count = doc.data().count;
            count = count + 1;
            db.collection("count").doc("count").set({
                count:count
            }, { merge: true })
            .then(function(docRef) {
                console.log("Document written with ID: ",docRef);
                if(count%3==0)
                    document.getElementById("id").innerHTML="A";
                if(count%3==1)
                    document.getElementById("id").innerHTML="B";
                if(count%3==2)
                    document.getElementById("id").innerHTML="C";
                
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });


        });
    });
}

var reset = function(){
    db.collection("count").doc("count").set({
        count:0
    }).then(function(){
        document.getElementById("id").innerHTML="";
    })
    db.collection("count").doc("A").set({
        A:0
    })
    db.collection("count").doc("B").set({
        B:0
    })
    db.collection("count").doc("C").set({
        C:0
    })
    db.collection("count").doc("AC").set({
        AC:0
    })
    db.collection("count").doc("BC").set({
        BC:0
    })
    db.collection("count").doc("AB").set({
        AB:0
    })
}
var g = 11;
var n = 23;
var val
var exchangeKey = function(value){
    console.log(value);
    val = value;
    
    if(count%3==0){
        db.collection("count").doc("B").set({
            B:Math.pow(g,value)%n
        }, { merge: true })
    }

    if(count%3==1){
        db.collection("count").doc("C").set({
            C:Math.pow(g,value)%n
        }, { merge: true })
    }

    if(count%3==2){
        db.collection("count").doc("A").set({
            A:Math.pow(g,value)%n
        }, { merge: true })
    }
    cycleOne();
}


db.collection("count").doc("count")
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
    });



