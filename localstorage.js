const idDetalle = window.location.href.split('?id=')[1];
const urlGeneral = 'https://pokeapi.co/api/v2/pokemon/';


const urlFinal = urlGeneral + idDetalle ;
console.log(urlFinal)

const goBack = () => {
    
    const destino = 'index.html'    
    window.location.href = destino 
    
}


document.addEventListener('DOMContentLoaded', () => {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    const contenedorHistorial = document.getElementById('contenedor-historial');
    
    historial.forEach((pokeId) => {
        const urlFinal = `${urlGeneral}${pokeId}`;
        fetch(urlFinal)
        .then(response => response.json())
        .then(resultado => {
            const nombre = resultado.name;
            const img = resultado.sprites.front_default;
            const pokeId = resultado.id;
            
            mostrarDetalle(nombre, img, pokeId, contenedorHistorial);
        })
        .catch(error => console.error('Error fetching Pokemon details:', error));
    });
});


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


const cleanHist = () => {
    
    localStorage.clear();
    location. reload()        
}

