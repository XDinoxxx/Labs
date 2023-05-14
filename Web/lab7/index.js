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
const statsScreen = document.getElementById('statsScreen');
const player1Stats = document.getElementById('player1Stats');
const player2Stats = document.getElementById('player2Stats');
const returnToStartButton2 = document.getElementById('returnToStartButton2');

// добавляем обработчики событий на кнопки
playButton.addEventListener('click', showPlayScreen);
statsButton.addEventListener('click', showStatsScreen);
startGameButton.addEventListener('click', startGame);
returnToStartButton.addEventListener('click', showStartScreen);
returnToStartButton2.addEventListener('click', showStartScreen);

// функция для отображения экрана с формой для ввода никнеймов
function showPlayScreen() {
  playScreen.style.display = 'block';
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
  const startingPlayer = Math.round(Math.random()) + 1;
  let currentPlayerIndex = startingPlayer;
  
  // ставим обработчик события на игровое поле
  board.addEventListener('click', makeMove);
  
  // выводим информацию о текущем игроке
  currentPlayer.textContent = `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'O' : 'X'}) ходит первым`;
  
  // создаем массив для хранения ходов
  const moves = [];
  let currentMoveIndex = 0;
  
  // функция для обработки хода
  function makeMove(event) {
    // проверяем, что был клик по пустой ячейке
    if (event.target.classList.contains('cell') && !event.target.textContent) {
      // добавляем в массив ходов
      moves.push({player: currentPlayerIndex, cell: event.target});
      
      // добавляем в список ходов
      const moveItem = document.createElement('li');
      moveItem.textContent = `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'O' : 'X'}) в ячейку ${Array.from(cells).indexOf(event.target) + 1}`;
      movesList.appendChild(moveItem);
      
      // записываем ход в ячейку
      event.target.textContent = currentPlayerIndex === 1 ? 'O' : 'X';
      
      // проверяем условия победы или ничьи
      if (checkWin() || checkTie()) {
        // в случае победы или ничьи убираем обработчик события с игрового поля
        board.removeEventListener('click', makeMove);
        
        // выводим результат игры
        winnerMessage.textContent = checkWin() ? `${currentPlayerIndex === 1 ? player1Name : player2Name} (${currentPlayerIndex === 1 ? 'X' : 'O'}) выиграл игру!` : 'Ничья!';
        resultScreen.style.display = 'block';
        
        // добавляем статистику игрокам
        if (checkWin()) {
          if (currentPlayerIndex === 1) {
            player1Stats.textContent = `${player1Name}: ${parseInt(player1Stats.textContent) + 1} побед(ы)`;
            player2Stats.textContent = `${player2Name}: ${player2Stats.textContent} поражен(ия)`;
          } else {
            player1Stats.textContent = `${player1Name}: ${player1Stats.textContent} поражен(ия)`;
            player2Stats.textContent = `${player2Name}: ${parseInt(player2Stats.textContent) + 1} побед(ы)`;
          }
        } else {
          player1Stats.textContent = `${player1Name}: ${player1Stats.textContent} ничьих`;
          player2Stats.textContent = `${player2Name}: ${player2Stats.textContent} ничьих`;
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