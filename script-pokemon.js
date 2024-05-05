const idDetalle = window.location.href.split('?id=')[1];
const urlGeneral = 'https://pokeapi.co/api/v2/pokemon/';
//console.log(urlGeneral)

const urlFinal = urlGeneral + idDetalle ;
console.log(urlFinal)


const mostrarDetalle = (nombre, img, pokeId, peso,) => {
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
    columnaDerecha.classList.add('col-md-6', 'colDer');

    const div1 = document.createElement('div');
    div1.classList.add('fondo');

    columnaDerecha.appendChild(div1)

    const imagen = document.createElement('img');
    imagen.classList.add('card-img');
    imagen.src = img;

    /* const imagen2 = document.createElement('img');
    imagen2.classList.add('card-img')
    imagen2.src = img2; */

    const nombrePkm = document.createElement('h2');
    nombrePkm.classList.add('nombre');
    nombrePkm.innerText = nombre

    const idPkm = document.createElement('h2');
    idPkm.innerText = "Pokemon Id" + " " + pokeId;

    const pokePeso = document.createElement('p')
    pokePeso.innerText = "Peso" + " " + peso ;

    //const pokeTipo = document.createElement('p')
    //pokeTipo.innerText = "Habilidades"


        
    tarjeta.addEventListener('click', () => { 
        detalleOn(pokeId)

    })

    columnaIzquierda.appendChild(imagen);
    //columnaIzquierda.appendChild(imagen2)


    div1.appendChild(nombrePkm);
    div1.appendChild(idPkm);
    div1.appendChild(pokePeso);

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
    //const img2 = resultado.sprites.back_default;
    const pokeId = resultado.id;
    const peso = resultado.weight;
    
    
    
    
    mostrarDetalle(nombre,img,pokeId,peso); 
});

const goBack = () => {
    
    const destino = 'index.html'    
    window.location.href = destino 
    
}

console.log(urlFinal)

