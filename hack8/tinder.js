// Tinderscript
// self-explanatory...
// Looping thru user array to find user that matched a criteria.
// if user like , the user will be swiped right or super liked, if not it will be swiped left.


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
    //console.log("Name: " + this.name + ", Age: " + this.age + ", Sex: " + this.sex + ", Location: " + this.location );
    return "Name: " + this.name + ", Age: " + this.age + ", Sex: " + this.sex + ", Location: " + this.location;
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

// create array for girls that you like, don't like, and superlike
var like = [];
var notlike = [];
var superlike = [];

// loop girls array
// only swipe right if girl's location is in Surabaya

// user enter his name
var username = prompt("Hello, what is your name?");
alert("Instruction: \nto swipe RIGHT, enter 'r' \nto swipe LEFT, enter 'l' \nto Superlike, enter's' \nto skip user just press enter \n\nGood luck, " + username + "!");

// loop girls array
for (var i=0 ; i < girls.length ; i++) {
  var ans = prompt(girls[i].profile_print());
    // r for swipe right
    // l for swipe LEFT
    // s for superlike

    if (ans == 'r')
      like.push(girls[i]);
    else if (ans == 'l')
      notlike.push(girls[i]);
    else if (ans == 's')
      superlike.push(girls[i]);
}

alert("Hi " + username + ", here is your result.")
alert("Hi " + username + ", you have liked " + like.length + " user(s)");
for (i = 0 ; i < like.length ; i++ ) {
    alert((i+1) + ". " + like[i].profile_print() );
}

alert("Hi " + username + ", you didn't like " + notlike.length + " user(s)");
for (i = 0 ; i < notlike.length ; i++ ) {
    alert((i+1) + ". " + notlike[i].profile_print() );
}

alert("Hi " + username + ", you have Superliked " + superlike.length + " user(s)");
for (i = 0 ; i < superlike.length ; i++ ) {
    alert((i+1) + ". " + superlike[i].profile_print() );
}
