/* Scrivo un programma che stampi in console i numeri da 1 a 100
Per controllare i multipli di 3 verifico il resto della divisione per 3 E per 5 di ognuno di questi numeri
? SE il resto della divisione per 3 è = 0 e di quella per 5 != 0
ALLORA stampo in console Fizz
Per controllare i multipli di 5 verifico il resto della divisione per 5 E per 3 di ognuno di questi numeri
? SE il resto della divisione per 5 è = 0 e di quella per 3 è != 0
ALLORA stampo in console Fizz
Per controllare i multipli sia di 3 che di 5 verifico il resto della divisione per 3 E poi per 5 di ognuno di questi numeri
? SE il resto di entrambi è = 0
ALLORA stampo in console FizzBuzz
ALTRIMENTI stampo in console il numero stesso
*/

let tabEl = document.getElementById("tab");
let titleEL = document.getElementById("titolo")
titleEL.style.fontWeight = "bold"
let newCard;


for (let i = 1; i <= 100; i++) {

    let newCard = document.createElement("div");
    tabEl.append(newCard);
    tabEl.style.width = "1200px"
    tabEl.style.gap = "30px"
    tabEl.style.backgroundColor = "#083b4c"
    newCard.style.width = `calc(100% / 7 - (30px / 7 * 6))`;
    newCard.style.height = "100px";
    newCard.style.display = "flex";
    newCard.style.alignItems = "center";
    newCard.style.justifyContent = "center";
    newCard.style.fontWeight = "bold";
    

    if (i % 3 === 0 && !(i % 5 === 0)) {

        console.log("Fizz");
        newCard.innerHTML = "Fizz"
        newCard.style.backgroundColor = "#0cd6a1";
        
    } else if (i % 5 === 0 && !(i % 3 === 0)) {

        console.log("Buzz");
        newCard.innerHTML = "Buzz"
        newCard.style.backgroundColor = "#ffd166";

    } else if (i % 3 === 0 && i % 5 === 0) {

        console.log("FizzBuzz");
        newCard.innerHTML = "FizzBuzz"
        newCard.style.backgroundColor = "#f0466f";

    } else {

        console.log(i);
        newCard.innerHTML = i
        newCard.style.backgroundColor = "#1389b2";
        //newCard.style.width = "100px";
        //newCard.style.height = "100px";
    }
}
