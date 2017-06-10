var $sentence = document.querySelector("#sentence")
var sentence = 'Here is a random sentence to test how quickly and accurately you can type. Once you finish typing this sentence you will see a score.'

for (var i = 0; i < sentence.length; i++) {
  $sentence.innerHTML += '<span>' + sentence[i] + '</span>'
}

document.addEventListener('DOMContentLoaded', function(event) {
  var $selected = document.querySelector('span')
  $selected.classList.add('selected')
})

var $last = $sentence.lastChild
var error = 0
var $container = document.querySelector('.container')
document.addEventListener('keydown', function(event) {
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
      // Test complete! Show score
      var score = 'Test complete! You made ' + error + ' typos.'
      var $score = renderScore(score)
      $container.appendChild($score)
    }
    else {
      error++
    }
  }
})

function renderScore(text) {
  var $score = document.createElement('p')
  $score.textContent = text
  return $score
}
