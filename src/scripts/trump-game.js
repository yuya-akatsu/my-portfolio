
const cardSymbols = {
  '1': 'number1.jpg',
  '2': 'number2.jpg',
  '3': 'number3.jpg',
  '4': 'number4.jpg',
  '5': 'number5.jpg',
  '6': 'number6.jpg',
  '7': 'number7.jpg',
  '8': 'number8.jpg',
  '9': 'number9.jpg',
  '10': 'number10.jpg',
};
const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCard(cardValue) {
  const cardElement = document.createElement('div');
  cardElement.className = ' rounded-lg shadow-md cursor-pointer';
  const cardContent = `
            <div class="card-back w-full h-full">
              <div class="w-full h-full  rounded flex items-center justify-center">
                <img src="/trump-game/trump${cardValue}.png" alt="Card Back">
              </div>
            </div>
            <div class="card-front w-full h-full  hidden">
              <div class="flex flex-col h-full">
                <div class="flex-grow flex items-center justify-center">
                  <img src="/trump-game/${cardSymbols[cardValue]}" alt="Card Front">
                </div>
              </div>
            </div>
          `;
  cardElement.innerHTML = cardContent;
  cardElement.addEventListener('click', () => {
    const back = cardElement.querySelector('.card-back');
    const front = cardElement.querySelector('.card-front');
    back.classList.toggle('hidden');
    front.classList.toggle('hidden');
  });
  return cardElement;
}
function renderCards() {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';
  const shuffledCards = shuffleArray([...Array(10).keys()]);
  shuffledCards.forEach((card, index) => {
    const cardElement = createCard(card);
    cardElement.querySelector('.card-front img').src = `/trump-game/number${card + 1}.jpg`;
    cardElement.querySelector('.card-back img').src = `/trump-game/trump${index + 1}.png`;
    container.appendChild(cardElement);
  });
}
document.getElementById('resetButton').addEventListener('click', renderCards);
renderCards();
