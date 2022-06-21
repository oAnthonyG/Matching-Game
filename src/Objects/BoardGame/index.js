import CardGame from  '../../components/Cardgame'

function BoardGame(amountCards){
    const $htmlCardGame = CardGame()
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards)



    return $htmlBoardGame
}


export default BoardGame