function addHowTo() {
  body.innerHTML = '';

  body.insertAdjacentHTML(
    'afterbegin',
    `
<div style='background-color: black; color: blue; font-size: 50px;'>TEST</div>
<br/>

<div style='background:lightpink;'>

<h1 style='color: coral; font-size: 50px;'>How to play</h1>

<p style='color: black; font-size: 16px'>
Guess the WORDLE in 6 tries.
<br/>
<br/>
Each guess must be a valid 5-letter word. Hit the enter button to submit.

<br/>
<br/>
After each guess, the color of the tiles will change to show how close your guess was to the word.
</p>

<br/>
<hr style='border-top: 2px solid #000'>

<br/>
<div style='font-size:20px;'>
<br/>
<strong>Examples</strong>
<br/>
<br/>

<div>[W][E][A][R][Y]</div>
<strong>The Letter W is in the word and in the correct spot</strong>
<br/>
<br/>

<div>[P][I][L][L][S]</div>
<strong>The letter I is in the word but in the wrong spot.</strong>
<br/>
<br/>

<div>[V][A][G][U][E]</div>
<strong>The letter U is not in the word in any spot.</strong>

<br/>
<hr style='border-top: 2px solid #000'>

<br/>
<br/>

<p>
A new WORDLE will be available each time you start a new game!
</p>
</div>
<div>
 `
  );

  body.addEventListener('click', function (e) {
    body.style.color = 'green';
  });
}

// addHowTo();
