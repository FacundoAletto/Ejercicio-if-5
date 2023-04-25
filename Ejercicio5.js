const LIM_MASCOTA_CLIENTE = 3;
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
}