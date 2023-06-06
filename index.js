// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const kelvin = 293; 
// La variable kelvin est initialisé à 293. //La déclaration const permet que cette valeur soit inchangeable. 

const celcius = kelvin - 273;  
// On soustrait kelvin qui vaut 293 à 273 

let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);   

let fahrenheit = celcius * (9/5) + 32; 
// Cette équation calcule fahrenheit pour obtenir le résultat en fahrenheit.

fahrenheit = Math.floor(fahrenheit); 
// La méthode .floor() permet d'arrondir notre témpérature, car on obtient un nombre décimal. 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);   

