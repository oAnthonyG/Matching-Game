import CardGame from '../Cardgame'
import './style.css'

function CardFrontBack(){
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = () => {
        const $origin = event.target
        const $cardFrontBack = $origin.closest('.card-front-back')

        $cardFrontBack.classList.toggle('-active')
    }
    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
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