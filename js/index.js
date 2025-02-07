/* Conociendo la edad de varias personas, indicar la edad promedio.
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18
La salida requerida presenta el siguiente formato: 
La edad promedio es 17 
*/

import Cl_Edades from "./Cl_Edades.js";
import Cl_Personas from "./Cl_Personas.js";

let eda1 = new Cl_Edades(15) 
let eda2 = new Cl_Edades(14)
let eda3 = new Cl_Edades(19)
let eda4 = new Cl_Edades(20)
let eda5 = new Cl_Edades(16)
let eda6 = new Cl_Edades(18)

let personas = new Cl_Personas()

personas.procesar(eda1)
personas.procesar(eda2)
personas.procesar(eda3)
personas.procesar(eda4)
personas.procesar(eda5)
personas.procesar(eda6)

alert(`La edad promedio es de: ${personas.promedio()}`)