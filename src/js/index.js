/*
quando clicar no pokemon da listagem temos que esconder o cartao pokémon aberto e mostrar o cartão correspondenteao que foi selecionado na listagem.

pra isso vamos precisar trabalhar com dois elementos
1. listagem
2. cartão do pokémon

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- remover a classe aberto só do cartão que está aberto
- ao clicar em um pokémon da listagem pegamos o id deste pokémon para saber qual o cartão mostrar
- remover a classe ativa que marca o pokémon selecionado
- adicionar a classe ativo no item selecionado da lista

*/

// Variáveis
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // - remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto');
        cartaoPokemonAberto.classList.remove('aberto');

        // - ao clicar em um pokémon da listagem pegamos o id deste pokémon para saber qual o cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value;

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir);
        cartaoPokemonParaAbrir.classList.add('aberto');

        // - remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo');
        pokemonAtivoNaListagem.classList.remove('ativo');

        // - adicionar a classe ativo no item selecionado da lista
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado);
        pokemonSelecionadoNaListagem.classList.add('ativo');
    })
})
