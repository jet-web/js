'use strict';

// selecting elements
const playerDom0 = document.querySelector('.player--0');
const playerDom1 = document.querySelector('.player--1');
const score0_element = document.querySelector('#score--0');
//       class でなく、ID の場合のみ、以下のやり方も、有効である。
//       getElementById()
const score1_element = document.getElementById('score--1');
const current0_elem = document.getElementById('current--0');
const current1_elem = document.getElementById('current--1');

// dice：img、pngデータ、⇓ // starting condition で、隠す。
const diceElement = document.querySelector('.dice');

// ボタン３つ：絶対使うにきまっているので、今ここで、ボタンDom を、作っておく。
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let player1and2zScoreArray, currentScore, activePlayer, playing;

const init = function () {
  // Array に、両者のスコアを、保存しておく。
  player1and2zScoreArray = [0, 0];
  // 今サイコロを振っているplayerのためのスコア保持。
  currentScore = 0;
  // Activeなplayerを判定、0…player1、1…player2。
  activePlayer = 0;
  // プレイ状態であるかどうか。
  playing = true;

  score0_element.textContent = 0;
  score1_element.textContent = 0;
  current0_elem.textContent = 0;
  current1_elem.textContent = 0;

  diceElement.classList.add('hidden');
  // もし、最初から、在ったり無かったりしたら、JS は、何もしないだけ。
  playerDom0.classList.remove('player--winner');
  playerDom1.classList.remove('player--winner');
  playerDom0.classList.add('player--active');
  playerDom1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // classList.toggle('...')
  //    => 'player--active' があれば「ない」ことにする、、また、
  //  　無ければ「ある」ことにする。
  playerDom0.classList.toggle('player--active');
  // .player--active .name { color: mediumseagreen; }
  // 　　　　　　　　　　　　↑、これを付け加えて分かりやすくした。
  playerDom1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    //     ・1～6 の、数値 を、指定する変数
    //     ・サイコロを振った時のみ、発生させる数値なので「グローバル」にしない。
    const diceNumValue = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumValue);
    // 2. Display dice roll
    //     ①Dom.classList　=>　class・hidden を、削除する、イメージ。
    // 　　②Dom.src　=>　dece-5.png の、5を、1～6 に、変えるイメージ。
    // 　　　　// その時、文字列テンプレート を、使う。
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceNumValue}.png`;
    // 3. サイコロの値 が、1かどうか を、チェックする。
    // 　　　1でない時　=>　スコアを加算していく
    // 　　　1の時　=>　Player1　⇔　Player2
    if (diceNumValue !== 1) {
      currentScore += diceNumValue;
      // console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //^ diceNumValue === 1
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold button');

    // 1. Add currect score to active player's score
    player1and2zScoreArray[activePlayer] += currentScore;
    //^scores[ 0 or 1 ] = += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      player1and2zScoreArray[activePlayer];
    // 2. Check if player's score is >= 100
    if (player1and2zScoreArray[activePlayer] >= 100) {
      //       Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      //       Switch to next player
      switchPlayer();
    }
  }
});

// コード・チャレンジ
// もう一度、最初から復習。
btnNew.addEventListener('click', init);
