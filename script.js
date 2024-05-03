
const mostrarTarjeta = (nombre, img, pokeId) => {
    const contenedorPokemons = document.getElementById("contenedor-pokemons");
    const tarjeta = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagen = document.createElement('img');
    tarjeta.addEventListener('click', () => { 
        detalleOn(pokeId);
        guardarPokemonClickeado(pokeId)

  
    })

    
    tarjeta.classList.add('tarjeta');
    contenedorPokemons.appendChild(tarjeta);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    
    titulo.innerText = nombre;
    imagen.src = img; 
}


const detalleOn = (pokeId) => {
    
    const destino = 'detalle.html?id='    
    window.location.href = destino + pokeId;
}


const guardarPokemonClickeado = (pokeId) => {
    let historial = JSON.parse(localStorage.getItem('historial')) || [];
    if (!historial.includes(pokeId)) {
        historial.push(pokeId);
        localStorage.setItem('historial', JSON.stringify(historial));
        console.log('Se ha guardado el Pokémon con el ID:', pokeId);
    }
};

const url_base = 'https://pokeapi.co/api/v2/pokemon/'
const cantidad_pokemons = 100; 




for (let i = 1; i <= cantidad_pokemons; i++) {
    const url_pokemon = `${url_base}${i}`;
    
    fetch(url_pokemon)
        .then(response => response.json())
        .then(resultado => {
            //console.log("result", resultado);

            const nombre = resultado.name;
            const img = resultado.sprites.front_default;
            const pokeId = resultado.id
            

            
            mostrarTarjeta(nombre,img,pokeId); 
        });
}



const gohHist = () => {
    
    const destino = 'historial.html'    
    window.location.href = destino 
    
}


/*const guardarInfusion = (infusion) => {
    const datos = JSON.parse(localStorage.getItem("historial")) || [];
    datos.push(infusion);
    localStorage.setItem("historial", JSON.stringify(datos))
}




 const mostrarItem = (item) => {
    const lista = document.querySelector('.historial');
    const tarjeta = document.createElement('div');
    tarjeta.className="item"; 
    tarjeta.innerText = JSON.stringify(item)
    lista.appendChild(tarjeta);
}

const mostrarHistorial = () => {
    const datos = JSON.parse(localStorage.getItem("historial")) || [];
    datos.forEach(item => {
        mostrarItem(item);
    })
}


mostrarHistorial(); */