/* Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.

Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.

Siendo los resultados de un salón de clases los siguientes: 
cédula(puntos); 888 (60Ptos), 777 (50Ptos), 999 (40Ptos), 
333 (80Ptos), 111 (30Ptos), 666 (90Ptos), 444 (48Ptos) y 222 (60Ptos).

La salida que se espera es como la siguiente: 
-Cantidad de aprobados: 6
-Cantidad de reprobados: 2 
-Nota promedio de la sección: 57.25 
*/

import cl_Estadisticas from "./Cl_Estadisticas.js";
import cl_Estudiantes from "./Cl_Estudiantes.js";

let Estadi1 = new cl_Estadisticas("888", 60);
let Estadi2 = new cl_Estadisticas("777", 50);
let Estadi3 = new cl_Estadisticas("999", 40);
let Estadi4 = new cl_Estadisticas("333", 80);
let Estadi5 = new cl_Estadisticas("111", 30);
let Estadi6 = new cl_Estadisticas("666", 90);
let Estadi7 = new cl_Estadisticas("444", 48);
let Estadi8 = new cl_Estadisticas("222", 60);

let estudiante = new cl_Estudiantes();

estudiante.procesar(Estadi1);
estudiante.procesar(Estadi2);
estudiante.procesar(Estadi3);
estudiante.procesar(Estadi4);
estudiante.procesar(Estadi5);
estudiante.procesar(Estadi6);
estudiante.procesar(Estadi7);
estudiante.procesar(Estadi8);

let salida = document.getElementById("salida")
salida.innerHTML= `
Cantidad de aprobados: ${estudiante.CantidadAprobados()}
<br>Cantidad de reprobados: ${estudiante.CantidadReprobados()}
<br>Nota promedio de la sección: ${estudiante.promedio()}
`