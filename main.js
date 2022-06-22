import './src/style/settings/colors.css'
import './src/style/elements/generic/reset.css'
import './src/style/elements/base.css'


import ScoreBoard from './src/Objects/ScoreBoard'

import BoardGame from './src/Objects/BoardGame'



const $root = document.querySelector('#root')

 




$root.insertAdjacentHTML(
    'beforeend', 
    `
        ${ScoreBoard()} 
        ${BoardGame(2)}
    `
)




