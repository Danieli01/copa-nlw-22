function createGame(player1, hour, palyer2) {
    return `
    <li>
        <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${palyer2}">
        <strong>${hour}</strong>
        <img src="./assets/icon=${palyer2}.svg" alt="Bandeira da ${palyer2}">
    </li>
    `
}

let delay =0;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>  
    `
}

document.querySelector('#cards').innerHTML = 
    createCard('24/11', 'quinta', 
    createGame('brazil', '16:00', 'serbia') +
    createGame('brazil', '16:00', 'serbia') +
    createGame('brazil', '16:00', 'serbia') +
    createGame('brazil', '16:00', 'serbia')
    ) +
    createCard('28/11', 'segunda', 
    createGame('brazil', '13:00', 'switzerland') + 
    createGame('portugal', '16:00', 'uruguay')  +
    createGame('portugal', '16:00', 'uruguay') +
    createGame('portugal', '16:00', 'uruguay')
    ) +
    createCard('02/11', 'sexta', createGame('brazil', '16:00', 'cameroon'))
    
