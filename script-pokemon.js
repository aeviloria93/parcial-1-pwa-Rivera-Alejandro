const idDetalle = window.location.href.split('?id=')[1];
const urlGeneral = 'https://pokeapi.co/api/v2/pokemon/';
//console.log(urlGeneral)

const urlFinal = urlGeneral + idDetalle ;
console.log(urlFinal)


const mostrarDetalle = (nombre, img, pokeId) => {
    const contenedorPokemons = document.getElementById("contenedor-pokemons");
    const tarjeta = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagen = document.createElement('img');
    tarjeta.addEventListener('click', () => { 
        detalleOn(pokeId)

    })

    
    tarjeta.classList.add('tarjeta');
    contenedorPokemons.appendChild(tarjeta);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    
    titulo.innerText = nombre;
    imagen.src = img; 
}



fetch(urlFinal)
.then(response => response.json())
.then(resultado => {
    console.log("result", resultado);

    const nombre = resultado.name;
    const img = resultado.sprites.front_default;
    const pokeId = resultado.id
    
    
    mostrarDetalle(nombre,img,pokeId); 
});

