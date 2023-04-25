const LIM_MASCOTA_CLIENTE = 3;

prompt("¡Bienvenido a Paseo Mascotas los devs!")

let mascotaGato = confirm("¿Tiene gatos?");
let mascotaPerro = confirm("¿Tiene perros?");

let cantidadMascotas = prompt("Ingrese el número de mascotas que desea pasear");

if (((mascotaGato && mascotaPerro) || (mascotaGato || mascotaPerro)) && (cantidadMascotas <= LIM_MASCOTA_CLIENTE)) {
    document.write("Perfecto! Podemos pasear a sus mascotas")
}else{
    document.write("Lamentablemene, no podremos hacer el paseo.")
}