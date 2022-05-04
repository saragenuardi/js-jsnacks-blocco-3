//3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.


const squadraCalcio = [
    {
        nome: "Lecce",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Palermo",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
];


squadraCalcio.forEach((index) => {
    let randomPunti = index.punti;
    let randomFalli = index.falli;
    let risultato = "";
    randomPunti = Math.floor(Math.random() * 99) + 1;
    randomFalli = Math.floor(Math.random() * 99) + 1;
    risultato = `La squadra ${index.nome} ha fatto un totale di ${randomPunti} punti e ha subito ${randomFalli} falli.`;
    console.log(risultato);
});