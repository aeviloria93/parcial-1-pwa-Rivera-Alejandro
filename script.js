const url_pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20' ;

//console.log(url_pokemons);

//https://pokeapi.co/api/v2/ability

const url_pokemons2 = 'https://pokeapi.co/api/v2/pokemon/1'



fetch(url_pokemons2).then(lista => lista.json())
.then(resultado => {
    console.log("result", resultado)

    const nombre = resultado["name"]
    console.log(nombre)
    const img = resultado.sprites.front_default
    console.log(img)
    
   
    


    //const primerPokemon = pokemons[0];
    //console.log(primerPokemon);
    
   // const poke_detalle = primerPokemon.url ;
    //console.log(poke_detalle)
    
})






/* fetch(url_pokemons).then(lista => lista.json())
.then(resultado => {
    const pokemons = resultado.results;
    console.log(pokemons)
    
    const primerPokemon = pokemons[0];
    //console.log(primerPokemon);
    
    const poke_detalle = primerPokemon.url ;
    //console.log(poke_detalle)
    
}) */





