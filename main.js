function creatGame(player1, hour, player2) {
  return`
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brazil">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da Serbia">
    </li>
  
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.6;
  return`
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

        <ul>
         ${games}
        </ul> 
    </div>
  
  `
}

document.querySelector("#cards").innerHTML = 
  
    createCard('24/11', 'segunda',
    creatGame('brazil', '16:00', 'serbia') + 
    creatGame('serbia', '13:00', 'india') +
    creatGame('japao', '13:00', 'uruguai') +
    creatGame('hungria', '13:00', 'switzer'))
    +
    createCard('25/11', 'terça',
    creatGame('switzer', '13:00', 'brazil') +
    creatGame('brazil', '16:00', 'japao') +
    creatGame('japao', '16:00', 'switzer') +
    creatGame('india', '16:00', 'switzer'))
    +
    createCard('26/11', 'quarta',
    creatGame('cameroon', '16:00', 'brazil') + 
    creatGame('brazil', '13:00', 'hungria') +
    creatGame('hungria', '16:00', 'switzer') +
    creatGame('serbia', '13:00', 'cameroon'))
    +
    createCard('27/11', 'quinta',
    creatGame('cameroon', '16:00', 'uruguai') + 
    creatGame('brazil', '13:00', 'cameroon') +
    creatGame('koreia', '16:00', 'switzer') +
    creatGame('serbia', '13:00', 'brazil'))
  



