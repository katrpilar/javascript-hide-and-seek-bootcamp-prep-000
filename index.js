function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++){
    var tonum = parseInt(lis[i].innerHTML);
    var val = tonum + n;
    lis[i].innerHTML = val.toString();
  }
}

function deepestChild(){
  const lis = document.querySelector('div#grand-node').querySelectorAll('div');
  let next = [];
  for (let i = 0; i < lis.length; i++){
    if(lis[i].length == 1){
      return lis[i];
    }
    
  }
  console.log(lis);
}