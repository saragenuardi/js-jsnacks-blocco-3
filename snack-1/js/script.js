//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.


const firstArray = [1, 2, 3, 4, 5,];
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let result = (firstArray.length > secondArray.length) ? 'Il primo array è più lungo' : 'il secondo array è più lungo';
console.log(result);


while (firstArray.length !== secondArray.length) {
    firstArray.push(Math.floor(Math.random() * 99) + 1);
    console.log(firstArray);
    console.log(secondArray);
    if (firstArray.length === secondArray.length) {
        result = "I due array hanno la stessa quantità di numeri"
    };
};

console.log(result);