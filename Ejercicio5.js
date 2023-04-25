/* const LIM_MASCOTAS = 3;
const LIM_TIEMPO_MIN = 30;
const LIM_TIEMPO_MAX = 60;
const COSTO_TIEMPO_MIN = 1500;
const COSTO_TIEMPO_MAX = 2000;

prompt("¡Bienvenido a Paseo Mascotas los devs!")

let mascotaGato = confirm("¿Tiene gatos?");
let mascotaPerro = confirm("¿Tiene perros?");

let cantidadMascotas = prompt("Ingrese el número de mascotas que desea pasear");
let tiempoPaseo = prompt("¿Cuántos minutos desea que dure el paseo? 30 o 60 min?");

if (((mascotaGato && mascotaPerro) || (mascotaGato || mascotaPerro)) && (cantidadMascotas <= LIM_MASCOTA_CLIENTE) && ((tiempoPaseo == LIM_TIEMPO_MIN) || (tiempoPaseo == LIM_TIEMPO_MAX))) {
    document.write("<h1>Perfecto! Podemos pasear a sus mascotas</h1>");
    document.write("<h3>Cantidad de mascotas a pasear: " + cantidadMascotas + " </h3>");
    document.write("<h3>Duración del paseo: " + tiempoPaseo + " minutos</h3>");
    if (tiempoPaseo == LIM_TIEMPO_MIN) {
        document.write("<h3>Costo final del paseo: $" + (COSTO_TIEMPO_MIN * cantidadMascotas) + "</h3>")
    }else{
        document.write("<h3>Costo final del paseo: $" + (COSTO_TIEMPO_MAX * cantidadMascotas) + "</h3>")
    }
}else{
    document.write("Lamentablemene, no podremos hacer el paseo.")
} */


const LIM_MASCOTAS = 3;

const TIPO_MASCOTA_GATO = 1;
const TIPO_MASCOTA_PERRO = 2;
const CANT_PERROS_DEFECTO = 0;

confirm("¡Bienvenido a Paseo Mascotas los devs! Para continuar click en Aceptar");

let tipoMascota = prompt("Si tiene un gato ingrese 1\nSi tiene perros ingrese 2");
let cantPerros = CANT_PERROS_DEFECTO;

if (tipoMascota == TIPO_MASCOTA_PERRO) {
    cantPerros = prompt("Ingrese la cantidad de mascotas que desea pasear");
    if (cantPerros <= LIM_MASCOTAS) {
        document.write("Perfecto! Un operador se contactará a la brevedad para coordinar el paseo para su/s perro/s.");
    }else{
        document.write("No es posible pasear esa cantidad de perros.");
    }
} else {
    document.write("Perfecto! En breve un operador se contactará para coordirar el paseo de su gato.")
}