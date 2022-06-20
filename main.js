import './src/style/settings/colors.css'
import './src/style/elements/generic/reset.css'
import './src/style/elements/base.css'
import CardGame from "./src/components/Cardgame"
import Player from './src/components/Text-card'
import CardGameVerso from './src/components/Cardgame/card-game-verso'


const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()
const $htmlCardGameVerso = CardGameVerso()
const $textCardGame = Player()



$root.insertAdjacentHTML('beforeend', $htmlCardGame + $htmlCardGame 
+ $htmlCardGame + $htmlCardGame + $htmlCardGame + $htmlCardGame)

$root.insertAdjacentHTML('beforeend', $htmlCardGameVerso + $htmlCardGameVerso
 + $htmlCardGameVerso + $htmlCardGameVerso + $htmlCardGameVerso + $htmlCardGameVerso)

$root.insertAdjacentHTML('beforebegin', $textCardGame)
$root.insertAdjacentHTML('beforeend', $textCardGame)