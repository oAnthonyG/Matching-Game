import './src/style/settings/colors.css'
import './src/style/elements/generic/reset.css'
import './src/style/elements/base.css'
import Player from './src/components/Text-card'
import BoardGame from './src/Objects/BoardGame'



const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGame(6)
const $textCardGame = Player()




$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
$root.insertAdjacentHTML('beforebegin', $textCardGame)



