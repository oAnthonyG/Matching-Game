import CardGame from '../Cardgame'
import './style.css'

function CardFrontBack(){
    return /*html*/`
        <article class="card-front-back">
            <div class=" card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('JavaScript', 'Logo javaScript')}
            </div>
        </article>
    `
}

export default CardFrontBack