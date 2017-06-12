var quotes = [
  '"Light travels faster than sound. This is why some people appear bright until you hear them speak." Alan Dundes',
  'Remember, today is the tomorrow you worried about yesterday. -Dale Carnegie',
  'When a man opens a car door for his wife, it\'s either a new car or a new wife. -Prince Phillip',
  '"Some cause happiness wherever they go; others whenever they go." -Oscar Wilde',
  'Age is an issue of mind over matter. If you don\'t mind, it doesn\'t matter. -Mark Twain',
  '"People say nothing is impossible, but I do nothing every day." A. A. Milne',
  'A bank is a place that will lend you money if you can prove that you don\'t need it. -Bob Hope',
  '"My doctor gave me six months to live, but when I couldn\'t pay the bill he gave me six months more." -Walter Matthau',
  '"I always arrive late at the office, but I make up for it by leaving early." Charles Lamb',
  'No man has a good enough memory to be a successful liar. -Abraham Lincoln'
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

var $first = document.querySelector('span')
document.addEventListener('DOMContentLoaded', function(event) {
  $first.classList.add('selected')
})

var $last = $sentence.lastChild
var error = 0
var correct = 0
var words = sentence.split(' ').length
var $container = document.querySelector('.container')
var startTime, endTime, totalTime
document.addEventListener('keypress', function(event) {
  if (event.key === $first.textContent) {
    startTime = new Date()
  }
  if ($last.getAttribute('class') !== 'selected') {
    var $selected = document.querySelector('.selected')
    var $next = $selected.nextSibling
    if (event.key === $selected.textContent) {
      correct++
      $selected.classList.remove('selected', 'wrong')
      $selected.classList.add('correct')
      $next.classList.add('selected')
    }
    else {
      $selected.classList.add('wrong')
      error++
    }
  }
  else if ($last.getAttribute('class') === 'selected') {
    var $selected = document.querySelector('.selected')
    if (event.key === $selected.textContent) {
      // Test is completed!
      correct++
      $selected.classList.remove('selected', 'wrong')
      $selected.classList.add('correct')
      endTime = new Date()
      totalTime = (endTime.getTime() - startTime.getTime())
      var wordsPerMin = Math.floor(words / totalTime * 1000 * 60)
      var score = 'Test complete! Your speed was ' + wordsPerMin + ' words per minute, and you made ' + error + ' typos.'
      var $score = renderScore(score)
      $container.appendChild($score)
    }
    else {
      $selected.classList.add('wrong')
      error++
    }
  }
})

function renderScore(text) {
  var $score = document.createElement('p')
  $score.textContent = text
  return $score
}
