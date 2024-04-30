const url_pokemons = 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20' ;

//console.log(url_pokemons);

fetch(url_pokemons).then(lista => lista.json())
.then(resultado => {
    const pokemons = resultado.results;
    console.log(pokemons)
    
    const primerPokemon = pokemons[0];
    //console.log(primerPokemon);
    
    const poke_detalle = primerPokemon.url ;
    //console.log(poke_detalle)
    
})





