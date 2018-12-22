var temps = "";
var alltimes = []
var go = 0;
var sec = 0;
var min = 0;
var hr = 0;
var afficher = document.getElementById("afficher");
var joueur = [];
var joueurs = [];
var data = {
    player : joueurs,
    timer : alltimes,
}

var p = document.createElement("p")

document.getElementById("btn").addEventListener("click",goStop);
document.getElementById("reset").addEventListener("click",reset);
document.getElementById("save").addEventListener("click",save);
document.getElementById("classement").addEventListener("click",Classement);


function goStop() {
    if(go == 0) {
        go = 1;
        timer();
        document.getElementById("btn").innerHTML = "Stop";
    } else if(go == 1){
        go = 0;
        document.getElementById("btn").innerHTML = "Start";
    }
}

function timer() {
    if(go == 1 ) {
    setTimeout(function() {
        sec = sec + 1 ;
        if(sec == 60) {
            sec = 0;
            min = min + 1;
        } else if(min  == 60) {
            min = 0;
            hr  = hr + 1;
        } else if(hr >= 24) {
            sec = 0;
            min = 0;
            hr = 0;
        }
        timer();
    },1000);
    
     temps = `${hr} : ${min} : ${sec}`;
    document.getElementById("afficher").innerHTML = temps;
    
}
    }

function reset() {
    go = 0;
    afficher.innerHTML = "0 : 0 : 0";
    sec = 0;
    min = 0;
    hr = 0;
}

function save() {
    
    joueur = document.getElementById("nom").value;
    joueurs.push(joueur);
    alltimes.push(temps);
    
}

function Classement() {
    localStorage.setItem("username", JSON.stringify(data.player));
    localStorage.setItem("temps",JSON.stringify(data.timer));
    alert( "username = " + JSON.parse(localStorage.getItem("username"))+ " Temps : " + JSON.parse(localStorage.getItem("temps")) );
   //document.getElementById("Joueur").appendChild(li).innerHTML =  "username = ";




  document.getElementById("Joueur").appendChild(p).innerHTML += JSON.parse(localStorage.getItem("username")) + " ";
  document.getElementById("Temps").appendChild(p).innerHTML += JSON.parse(localStorage.getItem("temps")); 


};
