function CheckGrade(){
    if(grade.value == ""){
     display.innerHTML = "INPUT A SCORE";
    }
    else if(grade.value >= 70){
        document.getElementById("display").innerHTML = "EXCELLENT";
    }
    else if(grade.value >= 60){
        display.innerHTML = "GOOD";
    }
    else if(grade.value >= 50){
        document.getElementById("display").innerHTML ="AVERAGE"
    }
    else if(grade.value <= 49){
        display.innerHTML = "BELOW AVERAGE";
    }
   else if(grade.value <39){
    document.getElementById("display").innerHTML = "FAIL"
   }
}