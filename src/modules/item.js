export default class ITEM {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.id = uuidv4();
  }
}