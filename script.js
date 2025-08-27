// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero sulla base di queste regole:


// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// chiediamo all'utente la sua etá
const userAge = prompt ('inserisci la tua etá')
console.log(parseInt(userAge));

// chiediamo all'utente quanti km deve percorrere
const userKmDistance = prompt ('Quanti Chilometri devi percorrere?')
console.log(parseInt(userKmDistance));

// variabili necessarie per continuare il programma
let discountTicketPrice;
const kmDistance = 1;
const flatKmTariff = (0.21 * kmDistance);
const underageDiscount = (20 / 100);
const elderlyDiscount = (40 / 100);

// check di quanto costerá il biglietto senza sconti
let baseTicketPrice = ((userKmDistance * flatKmTariff)).toFixed(2);
console.log(baseTicketPrice);

// applichiamo uno sconto del 20% nel caso dovesse essere minorenne
if (userAge < 18)  {
    let discountTicketPrice = (baseTicketPrice - (underageDiscount * baseTicketPrice)).toFixed(2)
    console.log(discountTicketPrice);
    let priceAlert = alert('il tuo biglietto costerá: ' + discountTicketPrice + ' €')
} 

// applichiamo uno sconto del 40% nel caso dovesse essere over 65
else if (userAge > 65 ) {
    let discountTicketPrice = (baseTicketPrice - (elderlyDiscount * baseTicketPrice)).toFixed(2)
    console.log(discountTicketPrice)
    let priceAlert = alert('il tuo biglietto costerá: ' + discountTicketPrice + ' €')
}

// infine il biglietto nel resto dei casi
else {
    let priceAlert = alert('il tuo biglietto costerá: ' + baseTicketPrice + ' €')
}

