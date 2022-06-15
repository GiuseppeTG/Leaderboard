import './style.css';
import UI from './modules/ui.js';
import { stringify } from 'uuid';
import { result } from 'lodash';
const { v4: uuidv4 } = require('uuid');
const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameId = 'h1Tn3ETDl7zaXsMuzvUP'


fetch(`${apiUrl}/games/`, {
  method: 'POST',
  body: JSON.stringify({
    name: 'Space Hecatomb',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

function setScore(user = 'TESTOSTERONA', score = '0000000') {
  fetch(`${apiUrl}/games/${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

setScore();

async function getScores() {  
    const response = await fetch(`${apiUrl}/games/${gameId}/scores/`);
    let data = await response.json();   
    return data.result;
} 

getScores();

// const data = await getScores();
// data.forEach(item => console.log(item))

// async function init() {
//   const data = await getScores();

// }


// const data = [
//   {
//     user: 'Giuseppe',
//     score: '100',
//     id: uuidv4(),
//   },
//   {
//     user: 'Monacho',
//     score: '12000000000000',
//     id: uuidv4(),
//   },
//   {
//     user: 'Monocuco10',
//     score: '730',
//     id: uuidv4(),
//   },
// ];

// console.log(data)

document.addEventListener('DOMContentLoaded', async () =>{
  const data = await getScores();
  data.forEach((item) => UI.renderScoreList(item))
});
