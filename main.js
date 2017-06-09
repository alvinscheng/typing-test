var $sentence = document.querySelector("#sentence")
var sentence = 'Here is a random sentence to test how quickly and accurately you can type. Once you finish typing this sentence you will see a score.'

for (var i = 0; i < sentence.length; i++) {
  $sentence.innerHTML += '<span>' + sentence[i] + '</span>'
}



// need $selected to be <p>
// when page loads, select first letter
/* document.addEventListener('DOMContentLoaded', function(event) {
  var $selected = renderNode($sentence[0])
  $selected.classList.add('selected')
  $sentence.appendChild($selected);
})
*/
