export default class APIScores {
  static async setScore(user, score, id, url) {
    const response = await fetch(`${url}/games/${id}/scores/`, {
      method: 'POST',
      body: JSON.stringify({
        user: `${user}`,
        score: `${score}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const generateScore = await response.json();
    console.log(generateScore);
  }
  static async getScores(url, id) {  
    const response = await fetch(`${url}/games/${id}/scores/`);
    let data = await response.json();   
    return data.result;
  } 
}
