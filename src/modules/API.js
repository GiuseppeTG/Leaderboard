export default class APIScores {
  static setScore(user, score, id, url) {
    fetch(`${url}/games/${id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: `${user}`,
        score: `${score}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  static async getScores(url, id) {
    const response = await fetch(`${url}/games/${id}/scores/`);
    const data = await response.json();
    return data.result;
  }
}
