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
  
function deepestChild() {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0, 1=list.length; i<1; i++) {
    list[i].innerHTML = (i+1).toString()
  }

