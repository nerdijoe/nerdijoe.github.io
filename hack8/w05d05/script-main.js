/*
var swipeleft = document.getElementById('swipeleft');

swipeleft.addEventListener('click', function() {
  alert("Swipe Left for Strawberry!");
});

var test = document.getElementById('test');

var testbanana = document.createElement('img');
testbanana.src = 'image/banana.jpg';
test.appendChild(testbanana);
*/

var body = document.body;
var mainContainer = document.getElementById('main-container');

// create object
var profile = {
  "fruits": [
    {
      "name": "Strawberry",
      "pic": "image/strawberry.jpg",
      "age": 22
    },
    {
      "name": "Banana",
      "pic": "image/banana.jpg",
      "age": 25
    },
    {
      "name": "Papaya",
      "pic": "image/papaya.jpg",
      "age": 23
    }
  ]
}

var startbutton = document.getElementById('start');
startbutton.addEventListener('click', function() {

  body.removeChild(startbutton);

  for (var i=0 ; i < profile.fruits.length ; i++) {
    // create new div profile inside main-container
    var divEntry = document.createElement('div');
    divEntry.setAttribute('class', 'profile');
    divEntry.setAttribute('id', 'profile'+i);

    var img = document.createElement('img');
    img.src = profile.fruits[i].pic;

    var paraph = document.createElement('p');
    var paraphText = document.createTextNode(profile.fruits[i].name + ", " + profile.fruits[i].age);
    paraph.appendChild(paraphText);

    divEntry.appendChild(img);
    divEntry.appendChild(paraph);

    var swipeleft = document.createElement('button');
    swipeleft.setAttribute('id', 'swipeleft' + i);
    var swipeleftText = document.createTextNode('Swipe Left');
    swipeleft.appendChild(swipeleftText);

    var superlike = document.createElement('button');
    superlike.setAttribute('id', 'superlike' + i);
    var superlikeText = document.createTextNode('Super LIKE!');
    superlike.appendChild(superlikeText);


    var swiperight = document.createElement('button');
    swiperight.setAttribute('id', 'swiperight' + i);
    var swiperightText = document.createTextNode('Swipe Right');
    swiperight.appendChild(swiperightText);


    divEntry.appendChild(swipeleft);
    divEntry.appendChild(superlike);
    divEntry.appendChild(swiperight);

    mainContainer.appendChild(divEntry);


  }

  var notlike = document.getElementById('notlike');
  var like = document.getElementById('like');
  var superlike = document.getElementById('superlike');

  //---- Swipe Left ----
  var swipeleft0 = document.getElementById('swipeleft0');
  swipeleft0.addEventListener('click', function() {
    alert("Swipe Left for " + profile.fruits[0].name + ", " + profile.fruits[0].age +"!");

    var entry = document.getElementById('profile0');
    entry.removeChild(document.getElementById('swipeleft0'));
    entry.removeChild(document.getElementById('swiperight0'));
    entry.removeChild(document.getElementById('superlike0'));

    notlike.appendChild(entry);
  });

  var swipeleft1 = document.getElementById('swipeleft1');
  swipeleft1.addEventListener('click', function() {
    alert("Swipe Left for " + profile.fruits[1].name + ", " + profile.fruits[1].age +"!");

    var entry = document.getElementById('profile1');
    entry.removeChild(document.getElementById('swipeleft1'));
    entry.removeChild(document.getElementById('swiperight1'));
    entry.removeChild(document.getElementById('superlike1'));

    notlike.appendChild(entry);

  });

  var swipeleft2 = document.getElementById('swipeleft2');
  swipeleft2.addEventListener('click', function() {
    alert("Swipe Left for " + profile.fruits[2].name + ", " + profile.fruits[2].age +"!");

    var entry = document.getElementById('profile2');
    entry.removeChild(document.getElementById('swipeleft2'));
    entry.removeChild(document.getElementById('swiperight2'));
    entry.removeChild(document.getElementById('superlike2'));

    notlike.appendChild(entry);

  });

  //---- Swipe Right ----
  var swiperight0 = document.getElementById('swiperight0');
  swiperight0.addEventListener('click', function() {
    alert("Swipe Right for " + profile.fruits[0].name + ", " + profile.fruits[0].age +"!");

    var entry = document.getElementById('profile0');
    entry.removeChild(document.getElementById('swipeleft0'));
    entry.removeChild(document.getElementById('swiperight0'));
    entry.removeChild(document.getElementById('superlike0'));

    like.appendChild(entry);
  });

  var swiperight1 = document.getElementById('swiperight1');
  swiperight1.addEventListener('click', function() {
    alert("Swipe Right for " + profile.fruits[1].name + ", " + profile.fruits[1].age +"!");

    var entry = document.getElementById('profile1');
    entry.removeChild(document.getElementById('swipeleft1'));
    entry.removeChild(document.getElementById('swiperight1'));
    entry.removeChild(document.getElementById('superlike1'));

    like.appendChild(entry);
  });

  var swiperight2 = document.getElementById('swiperight2');
  swiperight2.addEventListener('click', function() {
    alert("Swipe Right for " + profile.fruits[2].name + ", " + profile.fruits[2].age +"!");

    var entry = document.getElementById('profile2');
    entry.removeChild(document.getElementById('swipeleft2'));
    entry.removeChild(document.getElementById('swiperight2'));
    entry.removeChild(document.getElementById('superlike2'));

    like.appendChild(entry);
  });


  //---- Super LIKE ----
  var superlike0 = document.getElementById('superlike0');
  superlike0.addEventListener('click', function() {
    alert("Super LIKE for " + profile.fruits[0].name + ", " + profile.fruits[0].age +"!");

    var entry = document.getElementById('profile0');
    entry.removeChild(document.getElementById('swipeleft0'));
    entry.removeChild(document.getElementById('swiperight0'));
    entry.removeChild(document.getElementById('superlike0'));
    superlike.appendChild(entry);
  });

  var superlike1 = document.getElementById('superlike1');
  superlike1.addEventListener('click', function() {
    alert("Super LIKE for " + profile.fruits[1].name + ", " + profile.fruits[1].age +"!");

    var entry = document.getElementById('profile1');
    entry.removeChild(document.getElementById('swipeleft1'));
    entry.removeChild(document.getElementById('swiperight1'));
    entry.removeChild(document.getElementById('superlike1'));

    superlike.appendChild(entry);
  });

  var superlike2 = document.getElementById('superlike2');
  superlike2.addEventListener('click', function() {
    alert("Super LIKE for " + profile.fruits[2].name + ", " + profile.fruits[2].age +"!");

    var entry = document.getElementById('profile2');
    entry.removeChild(document.getElementById('swipeleft2'));
    entry.removeChild(document.getElementById('swiperight2'));
    entry.removeChild(document.getElementById('superlike2'));

    superlike.appendChild(entry);
  });






});
