
const mostrarTarjeta = (nombre, img,) => {
    const contenedorPokemons = document.getElementById("contenedor-pokemons");
    const tarjeta = document.createElement('div');
    const titulo = document.createElement('h3');
    const imagen = document.createElement('img');

    
    tarjeta.classList.add('tarjeta');
    contenedorPokemons.appendChild(tarjeta);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    
    titulo.innerText = nombre;
    imagen.src = img; 
}



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
            

            
            mostrarTarjeta(nombre,img); 
        });
}









