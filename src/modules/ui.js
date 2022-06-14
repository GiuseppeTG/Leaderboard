export default class UI {
  static getScoreList = (item) => {
    const scoresList = document.querySelector('.scores-list');

    const listedItem = document.createElement('li');
    listedItem.classList.add('listed-item');
    listedItem.dataset.id = item.id;

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = `${item.name}:`;

    const itemScore = document.createElement('p');
    itemScore.classList.add('item-score');
    itemScore.textContent = item.score;

    scoresList.appendChild(listedItem);
    listedItem.appendChild(itemName);
    listedItem.appendChild(itemScore);
  }
}