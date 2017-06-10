var $sentence = document.querySelector("#sentence")
var sentence = 'Test Sentence.'
// 'Here is a random sentence to test how quickly and accurately you can type. Once you finish typing this sentence you will see a score.'

for (var i = 0; i < sentence.length; i++) {
  $sentence.innerHTML += '<span>' + sentence[i] + '</span>'
}

var $first = document.querySelector('span')
document.addEventListener('DOMContentLoaded', function(event) {
  $first.classList.add('selected')
})

var $last = $sentence.lastChild
var error = 0
var $container = document.querySelector('.container')
document.addEventListener('keypress', function(event) {
  if ($last.getAttribute('class') !== 'selected') {
    var $selected = document.querySelector('.selected')
    var $next = $selected.nextSibling
    if (event.key === $selected.textContent) {
      $selected.classList.remove('selected')
      $selected.classList.add('correct')
      $next.classList.add('selected')
    }
    else {
      error++
    }
  }
  else if ($last.getAttribute('class') === 'selected') {
    var $selected = document.querySelector('.selected')
    // Test is completed!
    if (event.key === $selected.textContent) {
      $selected.classList.remove('selected')
      $selected.classList.add('correct')
      // Calculate time (onKeyPress?)
      var score = 'Test complete! You made ' + error + ' typos.'
      var $score = renderScore(score)
      $container.appendChild($score)
    }
    else {
      error++
    }
  }
})

document.onkeypress = function(event) {

}

function renderScore(text) {
  var $score = document.createElement('p')
  $score.textContent = text
  return $score
}
