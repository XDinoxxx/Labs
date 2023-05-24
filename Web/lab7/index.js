const playButton = document.getElementById('playButton');
const statsButton = document.getElementById('statsButton');
const playScreen = document.getElementById('playScreen');
const startGameButton = document.getElementById('startGameButton');
const gameScreen = document.getElementById('gameScreen');
const currentPlayer = document.getElementById('currentPlayer');
const movesList = document.getElementById('movesList');
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const resultScreen = document.getElementById('resultScreen');
const winnerMessage = document.getElementById('winnerMessage');
const returnToStartButton = document.getElementById('returnToStartButton');
const restartButton = document.getElementById('restart');
const statsScreen = document.getElementById('statsScreen');
const player1Stats = document.getElementById('player1Stats');
const player2Stats = document.getElementById('player2Stats');
const returnToStartButton2 = document.getElementById('returnToStartButton2');
const draw = document.getElementById('draw');

// добавляем обработчики событий на кнопки
playButton.addEventListener('click', showPlayScreen);
statsButton.addEventListener('click', showStatsScreen);
startGameButton.addEventListener('click', startGame);
returnToStartButton.addEventListener('click', showStartScreen);
returnToStartButton2.addEventListener('click', showStartScreen);
restartButton.addEventListener('click', clearField);

// функция для отображения экрана с формой для ввода никнеймов
function showPlayScreen() {
  playScreen.style.display = 'block';
}

// функция очистки поля
function clearField() { 
  var cells = document.querySelectorAll('.cell'); 
  cells.forEach(function(cell) {
    cell.textContent = '';
  }); 

  var ul = document.querySelectorAll("ul"); 
  ul.forEach(function(item) {
    item.textContent = '';
  }); 

  startGame(); 
}

// функция для отображения экрана со статистикой игроков
function showStatsScreen() {
  statsScreen.style.display = 'block';
}

// функция для начала игры
function startGame() {
  // получаем имена игроков
  const player1Name = document.getElementById('player1Name').value;
  const player2Name = document.getElementById('player2Name').value;

  // проверяем наличие ввода
  if (player1Name === '' || player2Name === '') {
    alert('Введите имена игроков!');
    return;
  }

  // скрываем экран с формой
  playScreen.style.display = 'none';

  // отображаем экран с игрой
  gameScreen.style.display = 'block';

  // выбираем случайным образом, кто ходит крестиками, а кто ноликами
  const startingPlayer = Math.floor(Math.random() * 2) + 1; // случайный выбор первого игрока
  let player1Symbol; 
  let player2Symbol; 


  if(startingPlayer === 1){ 
    player1Symbol = 'X'; 
    player2Symbol = 'O'; 
  } 
  else{ 
    player1Symbol = 'O'; 
    player2Symbol = 'X'; 
  } 
   
  let currentPlayerIndex = startingPlayer; 
 
  // ставим обработчик события на игровое поле 
  board.addEventListener('click', makeMove); 
 
  // вывод информации о текущем игроке 
  currentPlayer.textContent = `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? player1Symbol : player2Symbol}) ходит первым`; 
  const moves = []; 


  // функция для обработки хода
  function makeMove(event) {
    // проверяем, что был клик по пустой ячейке
    if (event.target.classList.contains('cell') && !event.target.textContent) {
      // добавляем в массив ходов
      moves.push({ player: currentPlayerIndex, cell: event.target });

      // добавляем в список ходов
      const moveItem = document.createElement('li');
      moveItem.textContent = `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'X' : '0'}) в ячейку ${Array.from(cells).indexOf(event.target) + 1}`;
      movesList.appendChild(moveItem);

      // записываем ход в ячейку
      if(startingPlayer === 1){ 
        event.target.textContent = 'X';  
      } 
      else{ 
        event.target.textContent = 'O'; 
      } 

      // проверяем условия победы или ничьи
      if (checkWin() || checkTie()) {
        // в случае победы или ничьи убираем обработчик события с игрового поля
        board.removeEventListener('click', makeMove);

        // выводим результат игры
        winnerMessage.textContent = checkWin() ? `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'X' : 'O'}) выиграл игру!` : 'Ничья!';
        resultScreen.style.display = 'block';

        // добавляем статистику игрокам

        document.getElementById('player1name').innerHTML = document.getElementById('player1Name').value;
        document.getElementById('player2name').innerHTML = document.getElementById('player2Name').value;

        if (checkWin()) {
          if (currentPlayerIndex === 1) {
            let text = player1Stats.innerText;
            text = Number(text) + 1;
            player1Stats.innerText = text;
          } else {
            let text1 = player2Stats.innerText;
            text1 = Number(text1) + 1;
            player2Stats.innerText = text1;
          }
        }

        if (checkTie()) {
          let tx = draw.innerText;
          tx = Number(tx) + 1;
          draw.innerText = tx;
        }
        return;
      }

      // передаем ход следующему игроку
      currentPlayerIndex = currentPlayerIndex === 1 ? 2 : 1;
      currentPlayer.textContent = `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'X' : 'O'})`;
    }
  }

  // функция для проверки победы
  function checkWin() {
    const winningLines = [
      // горизонтальные линии
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // вертикальные линии
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // диагональные линии
      [0, 4, 8],
      [2, 4, 6]
    ];
    // проверяем, есть ли три одинаковых символа
    return winningLines.some(line => {
      return line.every(cellIndex => {
        return cells[cellIndex].textContent === (currentPlayerIndex === 1 ? 'X' : 'O');
      });
    });
  }

  // функция для проверки ничьей
  function checkTie() {
    // проверяем, что все ячейки заполнены
    return Array.from(cells).every(cell => {
      return cell.textContent;
    });
  }
}

// функция для отображения стартового экрана
function showStartScreen() {
  playScreen.style.display = 'none';
  gameScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  statsScreen.style.display = 'none';
}