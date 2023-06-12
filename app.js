/*console.log("esta conectado");*/

const fotoPerro = document.getElementById("foto-perro");
const noMegusta = document.getElementById("no-me-gusta");
const meGusta = document.getElementById("me-gusta");
const pasar = document.getElementById("pasar");
const cargando = document.getElementById("cargando");
const perrosVerde = document.getElementById("perros-verde");
const perrosRojo = document.getElementById("perros-rojo");
const api = "https://dog.ceo/api/breeds/image/random";

perrosVerde.style.display = "none";
perrosRojo.style.display= "none";
cargando.classList.add("oculto");

fotoPerro.addEventListener("load" , () =>{
    fotoPerro.classList.toggle("oculto", false);
    cargando.classList.toggle("oculto",  true);
})

noMegusta.style.display = "none"
meGusta.addEventListener("click", () => {
    gustosPerritos("Si");
})
async function perritos(){
    cargando.classList.toggle("oculto", false);
    fotoPerro.classList.toggle("oculto", true);
    const respuesta = await fetch(api);
    const respuestaJSON = await respuesta.json();
    fotoPerro.src  = respuestaJSON.message;
}

function gustosPerritos(gusto){
    imagen= document.createElement("img");
    imagen.src = fotoPerro.src;
    if(gusto === "Si"){
        perrosVerde.style.display = "flex";
        perrosVerde.appendChild(imagen)
    }else{
        perrosRojo.appendChild(imagen)
        perrosRojo.style.display = "flex"
    }
    perritos();
}

pasar.addEventListener("click", perritos);

perritos();

// Lista de participantes y sus puntajes
let participantes = [
    { nombre: "perrito 1", puntaje: 10 },
    { nombre: "perrito 2", puntaje: 8 },
    { nombre: "perrito 3", puntaje: 7 },
    { nombre: "perrito 4", puntaje: 6 },
    { nombre: "perrito 5", puntaje: 5 },
    {nombre : "perritos 6", puntaje: 6 },
  ];
  
  // Ordenar la lista de participantes de forma descendente según los puntajes
  participantes.sort(function(a, b) {
    return b.puntaje - a.puntaje;
  });
  
  // Obtener el elemento <ul> del HTML
  let rankingElement = document.getElementById("ranking");
  
  // Generar los elementos <li> y mostrar el ranking
  for (let i = 0; i < participantes.length; i++) {
    let participante = participantes[i];
  
    let li = document.createElement("li");
    li.textContent = (i + 1) + ". " + participante.nombre + " - Puntaje: " + participante.puntaje;
  
    rankingElement.appendChild(li);
  }