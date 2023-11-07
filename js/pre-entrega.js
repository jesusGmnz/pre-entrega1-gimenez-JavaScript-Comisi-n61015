//*Hola, Bienvenido a mi simulador de creditos
//* tutor si ve que mis comentarios tiene estos simbolos --> * ? <-- es porque tengo una extencion que le da colores a los comentarios

const nombre = prompt("Ingrese su nombre:");

//?muestra las 3 variables
let montoDePrestamo;
let tasaDeInteres;
let cantidaDeCouta;

//? funcion para calcular la pasa de intereses
function calcularTasaDeInteres(monto) {

    if (monto >= 500000 && monto <= 1000000) {

        return 0.045;

    } else if (monto > 1000000 && monto < 4000000) {

        return 0.05;

    } else if (monto >= 4000000) {

        return 0.055;

    } else {

        alert(" !!!Monto ingresado no es valido¡¡¡ "); 
        //?el profe dijo que es mala practica las alert pero pienso que en este programa le queda una alert  ;)
        return null;

    }
}

//?la segunda funcion calcula la cantidad de coutas de prestamo
function calcularCuotaMensual(monto, tasa, plazo) {

    const tasaMensual = tasa / 12;
    
    const plazoMeses = plazo * 12;
    
    const cuotaMensual = (monto * tasaMensual) / (1 - (1 + tasaMensual) ** -plazoMeses); //* use exponente de operadores matematicos
    
    return cuotaMensual;

}

//?ciclo1
do {

    montoDePrestamo = parseInt(prompt("Ingresar el monte del prestamo:"));

    tasaDeInteres = calcularTasaDeInteres(montoDePrestamo)

    if (tasaDeInteres == null) {
        alert("Ingrese un monto valido")
    }
}while (tasaDeInteres == null)

//?ciclo2
do {
    cantidaDeCouta = parseInt(prompt("En cuantos años deseas pagar el prestamo:"));

} while (isNaN(cantidaDeCouta));

const cuotaMensual = calcularCuotaMensual(montoDePrestamo, tasaDeInteres, cantidaDeCouta);

//!agrege "string interpolation" ya que como se algo de python es con "f-string"  ;)
const respuesta = `Sr o Sra ${nombre}, 
Su prestamos de ${montoDePrestamo} 
esta Aprobado, la tasa de intereses sera de ${tasaDeInteres} Anual,
Durante ${cantidaDeCouta} años,
Sus cuota sera ${cuotaMensual} mensual,
`;
console.log (respuesta);
