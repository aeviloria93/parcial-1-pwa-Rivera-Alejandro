const url_pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20' ;

//console.log(url_pokemons);

//https://pokeapi.co/api/v2/ability


/* const tarjetita = (ubicacion) =>{
    const container = document.getElementById("container")
    const li = document.createElement ('li');
    const titulo = document.createElement ('h3');
    titulo.innerText = 'hola'
    li.appendChild(titulo);
    container.appendChild(li)
} */

const mostrarTarjeta = (ubicacion, img) => {
    const container = document.getElementById("container");
    const titulo = document.createElement ('h3');
    const imagen = document.createElement('img');

    container.appendChild(titulo);
    container.appendChild(imagen);

    titulo.innerText = ubicacion
    imagen.src = img;
    //container.innerText = 'hola'
    
}

const url_pokemons2 = 'https://pokeapi.co/api/v2/pokemon/1'



fetch(url_pokemons2).then(lista => lista.json())
.then(resultado => {
    console.log("result", resultado)

    const nombre = resultado["name"]
    // console.log(nombre)
    const img = resultado.sprites.front_default
    //console.log(img)
    
   mostrarTarjeta(nombre, img)
    
})












