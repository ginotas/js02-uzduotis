// 1. Panaudoti Javascript "use-strict" režimą.

"use strict"  

// 2. Apsirašyti 4 kintamuosius: skaicius1, skaicius2, skaicius3, skaicius4.

var skaicius1;
var skaicius2;
var skaicius3;
var skaicius4;

skaicius1 = 1;
skaicius2 = 2;
skaicius3 = 3;
skaicius4 = 4;

// 3. Į konsolę išvesti visus 4 skaičius, jų visų sumą ir sandaugą.

console.log('skaicius1 yra: ' + skaicius1);
console.log('skaicius2 yra: ' + skaicius2);
console.log('skaicius3 yra: ' + skaicius3);
console.log('skaicius4 yra: ' + skaicius4);

console.log('visu skaiciu suma yra: ' + (skaicius1 + skaicius2 + skaicius3 + skaicius4));
console.log('visu skaiciu sandauga yra: ' + (skaicius1 * skaicius2 * skaicius3 * skaicius4));

// 3 (4). Sukeisti skaicius1 ir skaicius2 reikšmes vietomis, pasinaudojant laikinuoju kintamuoju.

var laikinas = skaicius1;
skaicius1 = skaicius2;
skaicius2 = laikinas;

// 4. Sukeisti skaicius3 ir skaicius4 reikšmes vietomis be laikinojo kintamojo. 

skaicius3 = skaicius4 + skaicius3;
skaicius4 = skaicius3 - skaicius4;
skaicius3 = skaicius3 - skaicius4;


// 5. Į alert išvesti sukeitimo rezultatus.

alert('Po sukeitimo skaicius1 = ' + skaicius1 + '; skaicius2 = ' + skaicius2 + '; skaicius3 = ' + skaicius3  + '; skaicius4 = ' + skaicius4);


// 6. Susikurti kintamąjį maxSkaicius, jam priskirti maksimalią įmanomą skaitinę reikšmę (infinity netinka) ir išvesti į konsolę.

var maxSkaicius;

maxSkaicius = Number.MAX_VALUE;

console.log('kintamajo maxSkaicius maksimali imanoma skaitine reiksme yra: ' + maxSkaicius);

// PAPILDOMOS UZDUOTYS

// 1. Susikurti kintamuosius: skaicius5, skaicius6.

var skaicius5;
var skaicius6;

skaicius5 = 5;
skaicius6 = 6;

// 2. Sukeisti kinamųju reikšmes skaicius5 ir skaicius6 pasitelkiant XOR operatorių.

skaicius5 = skaicius5 ^ skaicius6;
skaicius6 = skaicius5 ^ skaicius6;
skaicius5 = skaicius5 ^ skaicius6;

console.log('sukeistas skaicius5 yra: ' + skaicius5 + ' sukeistas skaicius6 yra: ' + skaicius6);


// 3. Rezultatą patalpinti į HTML dokumento div žymėje, kurios id="Rezultatas".

document.getElementById("rezultatas").innerHTML += "skaicius5 yra: " +skaicius5 + " skaicius6 yra: " +skaicius6;