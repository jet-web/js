'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 correct Number!';
// 🎉（テキストエディタ に「クラッカー」で変換　=>　貼り付ける。

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let score = 20;
let highScore = 0;
let newScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ ナンバー！ ⛔';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 正解！';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'MediumSeaGreen';
    document.querySelector('.number').style.width = '20rem';

    // highScore
    newScore = score;
    if (newScore > highScore) {
      highScore = newScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is high
  } else if (guess > secretNumber) {
    console.log(`score: ${score}`);
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 大きい！';
      score -= 1;
      if (score == 0) {
        console.log(`score: ${score}`);
        document.querySelector('.message').textContent = '💥 残念！';
      }
      document.querySelector('.score').textContent = score;
    }

    // when guess is low
  } else if (guess < secretNumber) {
    console.log(`score: ${score}`);
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 小さい！';

      score -= 1;
      if (score == 0) {
        console.log(`score: ${score}`);
        document.querySelector('.message').textContent = '💥 残念！';
      }
      document.querySelector('.score').textContent = score;
    }
  }
});

// Againボタンを有効にする（コード・チャレンジ）
document.querySelector('.again').addEventListener('click', function () {
  console.log("I'm in again");
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = '？　１～２０　？';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  // 難しかった！
  document.querySelector('.guess').value = '';
  // 答：
  console.log(secretNumber);
});
