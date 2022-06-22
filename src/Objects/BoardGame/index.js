import CardFrontBack from '../../components/CardFrontBack'
import './style.css'

function BoardGame(amountCards){
    const $htmlCardFrontBack = CardFrontBack()
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards)



    return ` 
        <section class="board-game">
            ${$htmlContent}
        </section>
`
}


export default BoardGame