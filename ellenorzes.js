function ellenorzes() {
    if (document.getElementById("qc").checked){
        document.getElementById("e").innerHTML="Jó válasz";
    }
    else{
        if (document.getElementById("qa").checked == true || document.getElementById("qb").checked == true || document.getElementById("qd").checked == true) {
            document.getElementById("e").innerHTML="Rossz válasz!" ;
        }

        else {
            document.getElementById("e").innerHTML="Rossz válasz!" ;
        }
        
    }
}