/*Sea la información de un artículo:
nombre, cantidad y precio base. Se
espera que los artículos tengan un
descuento, pero eso dependerá de
cada departamento.
El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para
edad de 1 año.
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva
clase sólo amerita edad y descuento().
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.

*/

import Cl_Juguete from "./Cl_Juguete.js";
import Cl_Departamento from "./Cl_Departamento.js";


let juguete = new Cl_Juguete("carrito", 2, 10, 2);
let juguete2 = new Cl_Juguete("peluche", 3, 20, 1 );
let dep = new Cl_Departamento();
dep.procesarArticulo(juguete);
dep.procesarArticulo(juguete2);

let salida = document.getElementById("Salida");
salida.innerHTML =`
<br> Nombre del juguete: ${juguete.nombre}
<br> Cantidad: ${juguete.cant}
<br> Precio base: $${juguete.pBase.toFixed(2)}
<br> Edad  recomendada: ${juguete.edad}
<br> Monto a pagar por el ${juguete.nombre}: $${juguete.pagar().toFixed(2)}<br>
`;
salida.innerHTML += `
<br> Nombre del juguete: ${juguete2.nombre}
<br> Cantidad: ${juguete2.cant}
<br> Precio base: $${juguete2.pBase.toFixed(2)}
<br> Edad  recomendada: ${juguete2.edad}
<br> Monto a pagar por el ${juguete2.nombre}: $${juguete2.pagar().toFixed(2)}<br>
`;
