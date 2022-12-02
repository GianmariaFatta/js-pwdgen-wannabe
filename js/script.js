/*Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21*/

console.log("JS OK");


const firstName = prompt("Come ti chiami?", "Jimmy");
// console.log(firstName);
const surname = prompt("Qual è il tuo Cognome?", "Fatta");
// console.log(surname);
const color =prompt("Qual è il tuo colore preferito?" , "Rosso");
// console.log(color);

const generatedElement =    document.      getElementById("generated");

const password= firstName + surname + color + "21";
console.log(password);

generatedElement.innerText = password;