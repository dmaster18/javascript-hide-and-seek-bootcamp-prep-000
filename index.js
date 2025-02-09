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
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0];
  
  while (nextNode) {
    gNode = nextNode;
    nextNode = gNode.children[0];
  }
  return (gNode);
}

