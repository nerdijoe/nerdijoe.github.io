// Tinderscript
// self-explanatory...
// Looping thru user array to find user that matched a criteria.
// if certain criteria is matched, the user will be swiped right or super liked, if not it will be swiped left.


/*
Requirements:
--------------
v Kondisional (if-else): mendapatkan nilai tambahan 5.
v Looping (for/while): mendapatkan nilai tambahan 5.
v Tipe data Array: mendapatkan nilai tambahan 10.
v Function: mendapatkan nilai tambahan 10.
v Tipe data Object: mendapatkan nilai tambahan 15.
v Pseudocode

*/

// Create constructor function
var User = function(name, age, sex, location) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.location = location;

  this.profile_print = function() {
    console.log("Name: " + this.name + ", Age: " + this.age + ", Sex: " + this.sex + ", Location: " + this.location );
  }
}

// function to print the user's profile in the user array
function print_user_array(arr) {
  for (var i=0 ; i < arr.length ; i++) {
    arr[i].profile_print();
  }
}


// Create User objects
var user01 = new User('Anna', 22, 'Female', 'Bandung');
var user02 = new User('Baby', 21, 'Female', 'Jakarta');
var user03 = new User('Angel', 25, 'Female', 'Surabaya');
var user04 = new User('Lusi', 23, 'Female', 'Malang');
var user05 = new User('Bella', 25, 'Female', 'Jakarta');


// create girls array
var girls = [];

// insert users in the girls array
girls.push(user01);
girls.push(user02);
girls.push(user03);
girls.push(user04);
girls.push(user05);

//
console.log("Girls (" + girls.length + ")");
print_user_array(girls);

// create array for girls that you like, don't like, and superlike
var like = [];
var notlike = [];
var superlike = [];

// loop girls array
// only swipe right if girl's location is in Surabaya
for (var i = 0 ; i < girls.length ; i++ ) {

//     console.log(girls[i].name);
    if (girls[i].location == 'Surabaya') {
      // swipe right :)
      like.push(girls[i]);
    }
    else if (girls[i].location == 'Malang') {
      // swipe right :)
      superlike.push(girls[i]);
    }
    else {
      // swipe left :(
      notlike.push(girls[i]);
    }
}

// print girls that were liked
console.log("Like (" + like.length + ")");
print_user_array(like);

console.log("SUPER Like (" + superlike.length + ")");
print_user_array(superlike);

// print girls that were not liked
console.log("NOT Like (" + notlike.length + ")");
print_user_array(superlike);


var haha = {
  "girls": [
  {
    "name": "Nina",
    "age" : 22,
    "sex" : "Female",
    "location" : "Jakarta",
    "liked" : false
  },
  {
    "name": "Asuka",
    "age" : 21,
    "sex" : "Female",
    "location" : "Tokyo",
    "liked" : false

  }

  ]
}

console.log(haha.girls.length);

for (var i = 0 ; i < haha.girls.length ; i++) {
  var ans = prompt(haha.girls[i].name + "?");
  if (ans == "y") {
    haha.girls[i].liked = true;
  }
}

for (var i = 0 ; i < haha.girls.length ; i++) {
  if(haha.girls[i].liked) {
    alert("name: " + haha.girls[i].name + ", age: " + haha.girls[i].age);
  }
}
