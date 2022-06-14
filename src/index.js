import './style.css';
import UI from './modules/ui.js';

const { v4: uuidv4 } = require('uuid');

const items = [
  {
    name: 'Giuseppe',
    score: '100',
    id: uuidv4(),
  },

  {
    name: 'Monacho',
    score: '12000000000000',
    id: uuidv4(),
  },

  {
    name: 'Monocuco10',
    score: '730',
    id: uuidv4(),
  },
];

const init = () => {
  items.forEach((item) => UI.getScoreList(item));
};

init();
