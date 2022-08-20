
window.onload = function() {
  insert_recommended();
};

function shuffleObject(obj){
  // new obj to return
  let newObj = {};
  // create keys array
  var keys = Object.keys(obj);
  // randomize keys array
  keys.sort(function(a,b){return Math.random()- 0.5;});
  keys.forEach(function(k) {
    newObj[k] = obj[k];
  });
  return newObj;
}

function insert_recommended() {
  var reco = JSON.parse(localStorage.getItem('reco'));
  if (reco != null){
    var section = document.createElement('section');
    section.className = 'section pb-3 wow fadeIn';
    section.setAttribute('data-wow-delay', '0.3s')
    var h1 = document.createElement('h1');
    h1.className= ' text-center mb-4';
    h1.innerText='Order Again!';
  
    section.appendChild(h1);
    var div1 = document.createElement('div');
    div1.className = 'row justify-content-center'
    var keys = Object.keys(reco);
    keys.sort(function(a,b){return Math.random()- 0.5;});
    if (keys.length>3){
      var maxlen = 4
    }
    else{
      maxlen = keys.length
    }
    for( var i=0; i<maxlen; i++ ){
      var div2 = document.createElement('div');
      div2.className = 'col-lg-3 col-md-6 mb-4';
      div2.style = 'cursor: pointer';
      div2.setAttribute('onclick', "location.href='/menu/#dish"+keys[i]+"'")
      div1.appendChild(div2);
      var div3 = document.createElement('div');
      div3.className = 'card card-ecommerce';
      div2.appendChild(div3);
      var div4 = document.createElement('div');
      div4.className = 'card-block text-center';
      var strong = document.createElement('strong');
      var h4 = document.createElement('h4');
      h4.className = 'card-title m-2 mt-4 mb-4';
      strong.innerText = reco[keys[i]][0];
      h4.appendChild(strong);
      div4.appendChild(h4);
      div3.appendChild(div4);
      var div5 = document.createElement('div');
      div5.className = 'card-footer';
      var span = document.createElement('span');
      span.className= 'float-center';
      span.innerText = 'AED '+reco[keys[i]][1];
      div5.appendChild(span);
      div4.appendChild(div5);
    }

    section.appendChild(div1);
    document.getElementById('recommended-items').appendChild(section);
  }
}