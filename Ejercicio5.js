const LIM_MASCOTA_CLIENTE = 3;
const LIM_TIEMPO_MIN = 30;
const LIM_TIEMPO_MAX = 60;

prompt("¡Bienvenido a Paseo Mascotas los devs!")

let mascotaGato = confirm("¿Tiene gatos?");
let mascotaPerro = confirm("¿Tiene perros?");

let cantidadMascotas = prompt("Ingrese el número de mascotas que desea pasear");
let tiempoPaseo = prompt("¿Cuántos minutos desea que dure el paseo?");

if (((mascotaGato && mascotaPerro) || (mascotaGato || mascotaPerro)) && (cantidadMascotas <= LIM_MASCOTA_CLIENTE) && (LIM_TIEMPO_MIN < tiempoPaseo < LIM_TIEMPO_MAX)) {
    document.write("<h1>Perfecto! Podemos pasear a sus mascotas</h1>");
    document.write("<h3>Cantidad de mascotas a pasear: </h3>" + cantidadMascotas);
    document.write("<h3>Duración del paseo: </h3>"+tiempoPaseo+"<h3> minutos</h3>")
}else{
    document.write("Lamentablemene, no podremos hacer el paseo.")
}