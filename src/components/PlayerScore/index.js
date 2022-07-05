import './style.css'

function PlayerScore(points = 0){
    return /*html*/`
        <ol class="player-score" data-points="${points}">
            <li class="pointer">um</li>
            <li class="pointer">dois</li>
            <li class="pointer">tres</li>
        </ol>
    
    
    `

}

export default PlayerScore