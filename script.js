let keuze = prompt("Wat wil je drinken? (cola, water of koffie)");
let resultaat = document.getElementById("resultaat");

if (keuze === "cola") {
    resultaat.textContent = "Je krijgt een blikje cola 🥤";
    resultaat.style.color = "red";
} 
else if (keuze === "water") {
    resultaat.textContent = "Goed bezig, lekker gezond 💧";
    resultaat.style.color = "blue";
} 
else if (keuze === "koffie") {
    resultaat.textContent = "Energie incoming ☕";
    resultaat.style.color = "brown";
} 
else {
    resultaat.textContent = "Dat drankje is helaas op";
    resultaat.style.color = "gray";
}
