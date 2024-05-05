const idDetalle = window.location.href.split('?id=')[1];
const urlGeneral = 'https://pokeapi.co/api/v2/pokemon/';
//console.log(urlGeneral)

const urlFinal = urlGeneral + idDetalle ;
console.log(urlFinal)


const mostrarDetalle = (nombre, img, pokeId) => {
    const contenedorPokemons = document.getElementById("contenedor-pokemons");
    //creamos la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta', 'card', 'mb-3');

    contenedorPokemons.appendChild(tarjeta)

    //creamos la fila para las columnas
    const fila = document.createElement('div')
    fila.classList.add('row', 'no-gutters');

    //cramos la primera columna
    const columnaIzquierda = document.createElement('div');
    columnaIzquierda.classList.add('col-md-6');

    //creamos la segunda columna
    const columnaDerecha = document.createElement('div');
    columnaDerecha.classList.add('col-md-6');

    const imagen = document.createElement('img');
    imagen.classList.add('card-img');
    imagen.src = img;

    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');


    
    tarjeta.addEventListener('click', () => { 
        detalleOn(pokeId)

    })

    columnaIzquierda.appendChild(imagen);
    columnaDerecha.appendChild(titulo);

    fila.appendChild(columnaIzquierda)
    fila.appendChild(columnaDerecha)

    tarjeta.appendChild(fila);
   
 
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

const goBack = () => {
    
    const destino = 'index.html'    
    window.location.href = destino 
    
}

console.log(urlFinal)

