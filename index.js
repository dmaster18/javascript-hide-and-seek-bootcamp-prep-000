function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rankedListAmounts = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < rankedListAmounts.length; i++) {
    rankedListAmounts[i].innerHTML = parseInt(rankedListAmounts[i].innerHTML) + n;
  }
  }
  
function deepestChild(){
  var selectedElement = document.querySelector('div#grand-node');
  for (var i = 0; )
}

