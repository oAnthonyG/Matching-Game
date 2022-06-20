import './src/style/settings/colors.css'
import './src/style/elements/generic/reset.css'
import './src/style/elements/base.css'
import CardGame from "./src/components/Cardgame"


const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()



$root.insertAdjacentHTML('beforeend', $htmlCardGame)