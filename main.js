const getQuote = document.querySelector('#q').addEventListener('click', fetchQuote);
const showAnswer = document.querySelector('#a').addEventListener('click', getAnswer);

let answer = ''

function fetchQuote() {
  const url = 'https://api.breakingbadquotes.xyz/v1/quotes';
  const placeForQuote = document.querySelector('h2');
  placeForQuote.innerText = ''
  document.querySelector('h3').innerText = ''
  document.querySelector('h4').innerText = ''
  

  fetch(url)
    .then(res => res.json())
    .then(data => {
      placeForQuote.innerText = `"${data[0].quote}"`
      answer = data[0].author
    })
    .catch(err => console.log(`error: ${err}`))
}

function getAnswer() {
  const placeForAnswer = document.querySelector('h3')
  placeForAnswer.innerText = `- ${answer}`
  const placeForQuote = document.querySelector('h2');

  // turn input value to uppercase
  const inputVal = document.querySelector('input').value.toLowerCase()
  const arr = inputVal.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const inputVal2 = arr.join(" ");

  const result = document.querySelector('h4');

  if (inputVal2 === '') {
    return ''
  } else if (answer === '') {
    result.innerText = 'Press the \'Get Quote\' to get started'
  }else if (inputVal2 === answer) {
    result.style.color = 'green'
    result.innerText =  `Correct! ${inputVal2} did said that`
  } else {
    result.style.color = 'red'
    result.innerText =  `Wrong! ${inputVal2} did not said that.\n It was ${answer} who said it!`
  }

  document.querySelector('input').value = ''
}
