export default class UI {
  static renderScoreList = (item) => {
    const scoresList = document.querySelector('.scores-list');

    const listedItem = document.createElement('li');
    listedItem.classList.add('listed-item');
    // listedItem.dataset.id = item.id;

    const itemUser = document.createElement('p');
    itemUser.classList.add('item-user');
    itemUser.textContent = `${item.user}:`;

    const itemScore = document.createElement('p');
    itemScore.classList.add('item-score');
    itemScore.textContent = item.score;

    scoresList.appendChild(listedItem);
    listedItem.appendChild(itemUser);
    listedItem.appendChild(itemScore);
  }
}