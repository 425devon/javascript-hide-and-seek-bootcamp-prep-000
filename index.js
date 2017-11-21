function getFirstSelector(selector){
  const lis = document.querySelector(selector);
  return lis;
};

function nestedTarget(target){
  var find = document.getElementById('nested');

  return find;
};

function deepestChild(){
  var deep = document.getElementById("grand-node").querySelectorAll('div');
  return deep[deep.length-1];
};

function increaseRankBy(n){
  
}
