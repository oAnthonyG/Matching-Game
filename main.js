import './src/style/settings/colors.css'
import './src/style/elements/generic/reset.css'
import './src/style/elements/base.css'

import BoardGame from './src/Objects/BoardGame'
import PlayerName from './src/components/PlayerName'
import ScoreBoard from './src/Objects/ScoreBoard'



const $root = document.querySelector('#root')

 




$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${ScoreBoard()} 
        ${BoardGame(6)}
    `
)




