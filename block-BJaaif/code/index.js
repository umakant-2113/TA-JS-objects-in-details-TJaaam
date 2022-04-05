/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let user={};
  user.name=name;
  user.age=age;
  return user;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  great:function(){
    console.log("hello")
  }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

var personStore = {
  great:function(){
    console.log("hello")
  }
};
function personFromPersonStore(name, age) {
let person=Object.create(personStore)
this.name=name;
this.age=age;
return person
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
var personStore = {
  great:function(){
    console.log("hello")
  },
  introduce:function(){
    console.log(`Hi, my name is  ${this.name}` )
  }
};
function personFromPersonStore(name, age) {
let person=Object.create(personStore)
this.name=name;
this.age=age;
return person
}

var sandra = personFromPersonStore('Sandra', 26);


// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/



// /********* Uncomment this line to test your work! *********/
var personStore = {
  great:function(){
    console.log("hello")
  }
};
function PersonConstructor(){
  let person=Object.create(personStore)
  return person;
}

var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/


// var personStore = {
//   great:function(){
//     console.log("hello")
//   }
// };
function PersonFromConstructor(name, age) {
this.name=name;
this.age=age;
this.great=function(){
  console.log("hello")
}
}

var mike =  new PersonFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// Without editing the code you've already written,
//  add an `introduce` method to the `PersonConstructor` function that logs "Hi, my name is [name]".
// add code here

function PersonFromConstructor(name, age) {
  this.name=name;
  this.age=age;
  this.great=function(){
    console.log("hello")
  }
  this.introduce=function(){
    console.log(`hi my name is ${this.name}`)
  }
  }
  
  var mike =  new PersonFromConstructor('Mike', 30);

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a class `PersonClass`. `PersonClass` should have 

class PersonClass {
  constructor(name) {
    this.name=name;
  };
  great(){
    console.log("hello")
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// // add code here

class PersonClass {
  constructor(name) {
    this.name=name;
  };
  great(){
    console.log("hello")
  }
}
class DeveloperClass extends PersonClass{
    constructor(name){
       super(name)
    }
  introduce(){
    console.log(`Hello World, my name is ${this.name}.`)
    
    }
   
}




// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/
// Create an object `adminFunctionStore` that has access to all 
// methods in the `userFunctionStore` object, without copying them over individually.
var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};
var adminFunctionStore=Object.create(userFunctionStore)

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}



function adminFactory(name, score) {
  let person=Object.create(adminFunctionStore)
  person.name=name;
  person.score=score;
  person.sharePublicMessage=function(){
    console.log(`Welcome ${this.name}!`)
  }
  return person;
}

/* Put code here for a method called sharePublicMessage*/

// Then make sure the value of the 'type' field for `adminFactory` objects is 'Admin' instead of 'User'.
var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
userFunctionStore.sharePublicMessage = function () {
  console.log("Welcome users!");
};
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
