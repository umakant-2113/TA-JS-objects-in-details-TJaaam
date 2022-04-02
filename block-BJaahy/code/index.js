// Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.

class Square{
    constructor(side){
this.height = side
this.width = side
    }
// description(){
// alert(`The square is ${this.height * this.width}`)
// }
}
let area=new Square(5)

// Add a method named `description` that will alert a message saying `The square is ${width} x ${height}`

class Square{
    constructor(side){
this.height = side
this.width = side
    }
description(){
alert(`The square is ${this.height * this.width}`)
}
}
let =new Square(5)

// Create another method named `calcArea` that will return the area of the square.
class Square{
    constructor(side){
this.height = side
this.width = side
    }
description(){
alert(`The square is ${this.height * this.width}`)
}
calcArea(){
    return  `${this.height * this.width}`
}
}
let a =new Square(5)

// Create a getter method named `area` that will return area of the square.
class Square{
    constructor(side){
this.height = side
this.width = side
    }
description(){
alert(`The square is ${this.height * this.width}`)
}
calcArea(){
    return  `${this.height * this.width}`
};

get area(){
    return `${this.height * this.width}`
}
}
let b =new Square(9)

//  Create a setter method named `area` that will 
// accept a value (the value will be the area of any square like 124).
// Based on the input value update the `width` and `height`
//  of the square.The width and the height will be 
// updated to 12 (12 \* 12 = 124))
class Square{
    constructor(side){
this.height = side
this.width = side
    }
set area(value){
    this.height=value;
    this.width=value;
}

get area(){
    return `${this.height * this.width}`
}
}
let c =new Square(9)
// Create a static method named 
// `isEqual` which accepts two square instance 
// (when you create a new object using the class). 
// If the area of both square is same the method should
//  return `true` or `false`. (Static methods are called
//  directly on the class not in the instance)

class Square{
    constructor(side){
this.height = side
this.width = side
    }
description(){
alert(`The square is ${this.height * this.width}`)
}
calcArea(){
    return  `${this.height * this.width}`
};
set area(value){
    this.height=value;
    this.width=value;
};
get area(){
    return `${this.height * this.width}`
}
static isEqual(a,b){
    return a.area===b.area
};
}
let square1 =new Square(9)
let square2 =new Square(9)

//  Create two instance of the `Square` class (ex: `let s1 = new Square(6);`)
let s1=new Square(8)
let s2=new Square(10)

// Check the `area` getter method on both square.

s1.area;
s2.area;

// Check the `isEqual` method and pass the two instance you created above.
let square21 = user.area=16
let square22 = user.area=16
Square.isEqual(square21,square22)

//  Create a class named `User` that accepts `firstName` and `lastName` property

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
}
// Create a getter method named `fullName` that will return the full name of the person.
class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
return `${this.firstName}${this.lastName}`
    }
}

// - Create a `fullName` setter method that will accept full name parameter of the person. 
// It will update the `firstName` and `lastName` based on the input.
//  (Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`.
//   It will also change one condition if the length of the name passed is less than 5 characters it will
//    alert a message saying `Full name should be more than 5 characters`)

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    set fullName(name){
        let name =name.split(" ")
        if(name.length < 5){
           alert(`Full name should be more than 5 characters`) 
        }else{
            let firstName=name.split(" ")[0]
            let lastName=name.split(" ")[1]
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    get fullName(){
return `${this.firstName}${this.lastName}`
    }
}

// Create a method named `nameContains` which will accept string and will return `true` or `false` 
// based on if the name of the user contains the text that passed by user.

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    set fullName(name){
        let name =name.split(" ")
        if(this.fullName.length < 5){
           alert(`Full name should be more than 5 characters`) 
        }else{
            let firstName=name.split(" ")[0]
            let lastName=name.split(" ")[1]
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    get fullName(){
return `${this.firstName}${this.lastName}`
    }
    nameContains(str){
        return `${this.firstName} ${this.lastName}`.includes(str)

    }
}

// Create two instance of the `User` class
let user1= new User("arya","stark");
let user2= new User("john","snow");

// Check by using the `fullName` setter method with name bigger than 5 characters.
user1.fullName

// - Check by using the `fullName` setter method with name less than 5 characters.
user1.fullName="arya stark"

// - Check the `fullName` using getter
user1.fullName

// - Check the `nameContains` method
user1.nameContains("raj")
