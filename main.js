// Variabile per chiedere quanti i km da percorrere
let km= prompt("Quanti km dovrai percorrere?");
console.log (km)

// Variabile per chiedere l'età
let età= prompt("Quanti anni hai?");
console.log (età);

// Costante per prezzo intero del biglietto
const prezzoIntero = km * 0.21;

// Applicare sconto del 20% per Under18 
// (Calcolo della percentuale prezzointero * 20 / 100 = Sconto)
// (Prezzo intero - Sconto = Biglietto scontato)
if  (età < 18) {
    console.log ("Hai diritto allo sconto del 20%");
    let prezzoUnder18 = prezzoIntero - (prezzoIntero * 0.2);
    let prezzoUnder18Decimale = prezzoUnder18.toFixed(2);
    console.log (prezzoUnder18Decimale);


// Applicare sconto del 40% per Over65 
// (Calcolo della percentuale prezzointero * 40 / 100 = Sconto)
// (Prezzo intero - Sconto = Biglietto scontato)
} else if (età >= 65) {
    console.log ("Hai diritto allo sconto del 20%");
    let prezzoOver65 = prezzoIntero - (prezzoIntero * 0.4);
    let prezzoOver65Decimale = prezzoOver65.toFixed(2);
    console.log (prezzoOver65Decimale);
}