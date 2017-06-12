var quotes = [
  'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
  'Remember, today is the tomorrow you worried about yesterday.',
  'When a man opens a car door for his wife, it\'s either a new car or a new wife.',
  'Some cause happiness wherever they go; others whenever they go.',
  'Age is an issue of mind over matter. If you don\'t mind, it doesn\'t matter.',
  'People say nothing is impossible, but I do nothing every day.',
  'A bank is a place that will lend you money if you can prove that you don\'t need it.',
  'My doctor gave me six months to live, but when I couldn\'t pay the bill he gave me six months more.',
  'I always arrive late at the office, but I make up for it by leaving early.',
  'No man has a good enough memory to be a successful liar.'
]

function getQuote() {
  var randomInt = Math.floor(Math.random() * quotes.length)
  return quotes[randomInt]
}

function refresh() {
  location.reload()
}

var $sentence = document.querySelector("#sentence")
var sentence = getQuote()

for (var i = 0; i < sentence.length; i++) {
  $sentence.innerHTML += '<span>' + sentence[i] + '</span>'
}

var $selected = document.querySelector('span')
document.addEventListener('DOMContentLoaded', function(event) {
  $selected.classList.add('selected')
})

var $last = $sentence.lastChild
var errorCount = 0
var correctCount = 0
var words = sentence.split(' ').length
var $container = document.querySelector('.container')
var startTime, endTime, totalTime, wordsPerMin

document.addEventListener('keypress', function(event) {
  if (!$selected) return
  if (event.key === $selected.textContent) {
    correctCount++
    if (correctCount === 1) {
      startTime = new Date()
    }
    $selected.classList.remove('selected', 'wrong')
    $selected.classList.add('correct')
    if (correctCount === sentence.length) {
      endTime = new Date()
      totalTime = (endTime.getTime() - startTime.getTime())
      wordsPerMin = Math.floor(words / totalTime * 1000 * 60)
      $container.appendChild(renderScore(errorCount))
    }
    $selected = $selected.nextSibling
    if (!$selected) return
    $selected.classList.add('selected')
  }
  else {
    $selected.classList.add('wrong')
    errorCount++
  }
})

function renderScore(errors) {
  var $score = document.createElement('p')
  if (errors === 0) {
    $score.textContent = 'Good job! Your speed was ' + wordsPerMin + ' words per minute, and made 0 typos!'
  }
  else if (errors === 1) {
    $score.textContent = 'Test complete! Your speed was ' + wordsPerMin + ' words per minute, and you made 1 typo.'
  }
  else {
    $score.textContent = 'Test complete! Your speed was ' + wordsPerMin + ' words per minute, and you made ' + errorCount + ' typos.'
  }
  return $score
}
