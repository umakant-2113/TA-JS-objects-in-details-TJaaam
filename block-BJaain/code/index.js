console.log(this.document === document); // Output
 true;
// ------------

console.log(this === window); //Output
true;
// ------------

var myFunction = function () {
  console.log(this);
};
myFunction(); // Output
// myFunction is return global object as window
// ------------

function f1() {
  'use strict';
  return this;
}
console.log(f1() === window); //Output
// when we use strict method then this is return undefined
// return false
// ------------

function foo() {
  console.log('Simple function call');
  console.log(this === window);
}

foo(); //Output ??
// true
// ------------

// This for IIFE
(function () {
  console.log('Anonymous function invocation');
  console.log(this === window);
})(); //Output
//  true
// ------------

var myObject = {};
myObject.someMethod = function () {
  console.log(this);
};
myObject.someMethod(); //Value Of This


// this is point to myObject why we call the function left side of function dot 
// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output
name: "john read"
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output
name: "paul adams"
// ------------

function foo() {
  'use strict';
  console.log('Simple function call');
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function () {
    console.log(this === window);
  },
};

user.foo(); // Output
// false
let fun1 = user.foo1;
fun1(); // Output ??
// true
user.foo1(); // Output ??
// false
// ------------

this.x = 9;
var obj = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

obj.getX(); // Output ??
// out put 81

var retrieveX = obj.getX;
retrieveX(); //Output ??

// 9

var boundGetX = retrieveX.bind(obj);
boundGetX(); // Output ??

// 81
// ------------

function Person(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;

  this.displayName = function () {
    console.log(`Name: ${this.firstName} ${this.lastName}`);
  };
}

let person = new Person('John', 'Reed');
person.displayName(); // Output
// name: john read
let person2 = new Person('Paul', 'Adams');
person2.displayName(); // Output
// name : paul adams

person.displayName.call(person2); // Output ??
// person2 is not a object it is a instance of object;
// ------------

const a = {
  a: 'a',
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  },
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis();
// when we use arrow function in jaava script then it is target to window object 

// Output
obj.getThis.call(a);
// when we use arrow function in jaava script then it is target to window object 

// Output
obj.getThis2();
// it  is a function expresion in java script so it is target to object 

// Output
obj.getThis2.call(a);
// it is target to first object 

// Output
obj.getThis3();
// not apply any method in arrow function 

// Output
obj.getThis4();
// it is return to object 

// -------------

let person = {
  name: 'Jay',
  greet: function () {
    console.log('hello, ' + this.name);
  },
};

person.greet(); // output
// "hello jay"
let greet = person.greet;
greet(); // output

"hello"
// -------------

let name = 'Jay Global';
let person = {
  name: 'Jay Person',
  details: {
    name: 'Jay Details',
    print: function () {
      return this.name;
    },
  },
  print: function () {
    return this.name;
  },
};
console.log(person.details.print()); // output?
// jai details
console.log(person.print()); // output?

// jay person
let name1 = person.print;

let name2 = person.details;


console.log(name1()); // output?
// ""
console.log(name2.print()); // output?
// jai details
// --------

let outerFn = function () {
  let n = 5;
  console.log(innerItem);
  let innerFn = function () {
    let innerItem = 'inner';
    console.log(n);
  };
  return innerFn;
};

outerFn()();
// innerIten has define inside of inner so we can not call outside of inner function;

// -----------

let object = {
  data: [1, 2, 3],
  dataDouble: [1, 2, 3],
  double: function () {
    console.log('this inside of outerFn double()');
    console.log(this);
    return this.data.map(function (item) {
      console.log(this); // Output ???
      return item * 2;
    });
  },
  doubleArrow: function () {
    console.log('this inside of outerFn doubleArrow()');
    console.log(this);
    return this.dataDouble.map((item) => {
      console.log(this); // Output ???
      return item * 2;
    });
  },
};

object.double();
object.doubleArrow();

// --------------

let bobObj = {
  name: 'Bob',
};

function print() {
  return this.name;
}

let printNameBob = print.bind(bobObj);
console.log(printNameBob()); // output??

// bob
// -------------------

let obj1 = {
  data: [1, 2, 3],
  printFirstData: function () {
    if (this.data.length) return this.data[0];
  },
};

let obj2 = {
  data: [4, 5, 6],
  printSecondData: function () {
    if (this.data.length > 1) return this.data[1];
  },
};

let getSecondData = obj2.printSecondData.bind(obj1);
console.log(getSecondData()); // Output and why ???
// out put is 2
// --------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

call.says(); // output ???
// Hey, mom just called.
// -----------------

const call = {
  caller: 'mom',
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.says;

newCall(); // output ???

// Hey, undefined just called.
//  -----------------

function anotherCaller() {
  console.log(`${this.caller} called, too!`);
}

const call = {
  caller: 'mom',
  anotherCaller: anotherCaller,
  says: function () {
    console.log(`Hey, ${this.caller} just called.`);
  },
};

let newCall = call.anotherCaller;

newCall(); // output ??


// undefined call too
