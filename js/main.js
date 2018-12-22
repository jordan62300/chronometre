var temps = "";
var go = 0;
var sec = 0;
var min = 0;
var hr = 0;
var afficher = document.getElementById("afficher");
var joueur = [];

document.getElementById("btn").addEventListener("click",goStop);
document.getElementById("reset").addEventListener("click",reset);
document.getElementById("save").addEventListener("click",save);


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
    localStorage.setItem("username", joueur);
    localStorage.setItem("temps",temps);
    alert( "username = " + localStorage.getItem("username") + " Temps : " + localStorage.getItem("temps") );
}
