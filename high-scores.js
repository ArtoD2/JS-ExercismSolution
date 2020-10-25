//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scoreSheet) {
    this.scoreSheet = scoreSheet;
  }
  get scores() {
    return this.scoreSheet;
  }

  get latest() {
    return this.scoreSheet[this.scoreSheet.length-1];
  }

  get personalBest() {
    let scoreOrder = this.scoreSheet
    scoreOrder.sort();
    return scoreOrder[0];
  }

  get personalTopThree() {
    let scoreOrder = this.scoreSheet
    scoreOrder.sort(function(a, b){return b - a});
    return scoreOrder.slice(0,3);
  }
}
