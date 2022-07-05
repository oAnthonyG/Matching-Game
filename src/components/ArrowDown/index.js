import './style.css'

function ArrowDown(currentPlayer = 1) {
    return /*html*/`
    <img class="arrow-down"
         data-currentPlayer="${currentPlayer}" 
         src="./src/components/images/IconArrowDown.png" 
         alt="icone de uma seta para baixo">
    
    ` 

}

export default ArrowDown