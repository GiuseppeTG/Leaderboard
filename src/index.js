import './style.css';
import UI from './modules/ui.js';
import APIScores from './modules/API';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'RVihxLq2fEFCBIAf1cvF';
const scoresList = document.querySelector('.scores-list');
const scoreInput = document.querySelector('#score-input');
const nameInput = document.querySelector('#name-input');
const refreshButton = document.querySelector('#refresh-button');
const form = document.querySelector('.form');

//FUNCTIONS

async function refreshScores() {
  const data = await APIScores.getScores(apiUrl, gameId);
  scoresList.innerHTML = '';
  data.forEach((item) => UI.renderScoreList(item));
}


//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', async () =>{
  refreshScores();
});

form.addEventListener('submit', () => {
  let user = nameInput.value;
  let score = scoreInput.value;
  APIScores.setScore(user, score, gameId, apiUrl);
})

refreshButton.addEventListener('click', () => {
  refreshScores();
});
