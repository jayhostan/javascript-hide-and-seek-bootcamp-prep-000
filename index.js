var getFirstSelector = function(selector) {
  return document.querySelector(selector);
};

var nestedTarget = function() {
  return document.querySelector('#nested .target');
};

var increaseRankBy = function(n) {
    let lists = document.querySelectorAll('.ranked-list');

    for (let i = 0, l = lists.length; i < l; i++) {
      let children = lists[i].children;
      for (let j = 0, k = children.length; j < k; j++) {
        children[j].innerHTML = parseInt(children[j].innerHTML) + n;
      }
    }
};

var deepestChild = function() {
  let element = document.getElementById('grand-node');
  let child = element.children[0];
  while (child) {
    element = child;
    child = element.children[0];
  }

  return element;
};
