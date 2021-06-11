"use strict"

console.log("hello hell");

/* 
1. Suprogramuokite skriptą, kurioje parašius tam tikrą sekundžių kiekį, 
 rodo  24 valandų, minučių, sekundžių formatu.
    Sekundčių kiekis paimamas iš input HTML žymės laukelio.
        Išveskite konvertuotą sekunžių informacija į div.
*/
  
function sekundesx() {
   
    var val, min, sec;
    
    var reiksme = document.getElementById("sekundesx").value;

    if(reiksme > 86400) {
        reiksme = 0;
    }else if(reiksme < 0) {
        reiksme = 0;
    }else{
        reiksme = reiksme;
    }
     
    val = reiksme / 3600;
    min = ((val - parseInt(val)) * 3600) / 60;
    sec = (min - parseInt(min)) * 60;
    
    document.getElementById("rezultatas1").innerHTML = parseInt(val) + " (val) " + parseInt(min) + " (min) " + Math.round(sec) + " (sec)";
    }




// 2. Suraskite triženklio skaičiaus visų skaitmenų:
// suma, vidurki ir sandauga. 
// Prieš tai atpažinti, 
// ar tai yra triženklis skaičius, jei skaičius dviženklis ar n-ženklis, veiksmų nevykdyti 

function trizenklis() {
    
    var sk1, sk2, sk3;

    var skaicius = document.getElementById("skaicius").value;

    if(skaicius > 999) {
        skaicius = 0;
    } else if(skaicius < 100) {
        skaicius = 0;
    } else {
        skaicius = skaicius;
    }

    sk1 = Math.floor(skaicius / 100);
    sk2 = Math.floor((skaicius - (sk1*100)) / 10);
    sk3 = skaicius - (sk1 * 100) - (sk2 * 10);

    document.getElementById("rezultatas2").innerHTML = "skaiciu suma yra: " + (sk1 + sk2 + sk3) + " skaiciu vidurkis yra: " + ((sk1 + sk2 + sk3) / 3) + " skaiciu sandauga yra: " + (sk1 * sk2 * sk3);
}




/*

var numb = 123
var numb1 = Math.floor(numb / 100);
var numb2 = Math.floor((numb - (numb1 * 100)) / 10);
var numb3 = numb - (numb1 * 100) - (numb2 * 10);

*/