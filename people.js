/*3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: 
fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.*/

const  completeName  = require ("./names.js");
const  hobbies  = require ("./hobbies.js");

function namesHobbies() {
   return {
        completeName: completeName("Marco", "Vacchi"),
        hobbies: hobbies("giocare", "uscire", "sport")
   }
}


const result = namesHobbies(); 
console.log(result);
