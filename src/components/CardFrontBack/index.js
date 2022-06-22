import CardGame from '../Cardgame'

function CardFrontBack(){
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('JavaScript', 'Logo javaScript')}
        </article>
    `
}

export default CardFrontBack