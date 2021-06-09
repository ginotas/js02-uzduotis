"use strict"

console.log("hello hell");

// 1. Suprogramuokite skriptą, kurioje parašius tam tikrą sekundžių kiekį, 
// rodo  24 valandų, minučių, sekundžių formatu.

/*  nesigauna ideti / paimti is html 
function myFunction() {
    document.getElementById("sekundesx").value;
    document.getElementById("rezultatas").innerHTML = ("valandos: " + valandos + " minutes: " + minutes + " sekundes: " +sekundes);
  }
 
*/



let sekundesx = 1000;
let valandos = Math.floor(sekundesx / 3600);
sekundesx %= 3600;
let minutes = Math.floor(sekundesx / 60);
let sekundes = sekundesx % 60;

console.log("valandos: " + valandos + " minutes: " + minutes + " sekundes: " +sekundes);



// 2. Suraskite triženklio skaičiaus visų skaitmenų:
// suma, vidurki ir sandauga. 
// Prieš tai atpažinti, 
// ar tai yra triženklis skaičius, jei skaičius dviženklis ar n-ženklis, veiksmų nevykdyti 



//skaiciuoja suma, o kodel - nzn :D

var value = 999,
    sum = 0;
    
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log("triju skaiciu suma: " + sum);

// vidurki rasti kai skaiciuojama suma lengviau;


var avg = 0;

avg = sum / 3;

console.log("triju skaiciu sumos vidurkis yra: " + avg);

// sandauga... rytoj bandysiu




// 3. Sukurkite  skriptą, kuris suranda kvadratinės lygties sprendimą.

/*
var a, b, c;

a = 2;
b =






*/




