import './style.css'


function CardGame(icon = 'Letra A', alt = 'Logo nome Anthony'){
    return`
    <article class="card-game">
    <img class="image" src="./src/components/images/${icon}.png" alt="${alt}">
    </article>
    
    `
}


export default CardGame
