// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function creatUser(name,age){
    let user={};
    user.name=name;
    user.age=age;
    return user;
}
creatUser("umakant",27)


// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.

function creatUser(name,age){
    let user={};
    user.name=name;
    user.age=age;
    user.say=function sayHello(){
        alert(`Welcome ${user.name}`)
    }
    return user;
}
let data = creatUser("umakant",27)
// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
function creatuser(name,age){
    let user=Object.create(null)
    user.name=name;
    user.age=age;
    return user;
}
let personOne=creatUser("umakant",26)
let personTwo=creatuser("rajput",28)

// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())
let dataMethods={
    say:function sayHello(){

    }
}

function creatuser(name,age){
let user=Object.create(dataMethods)
user.name=name;
user.age=age;
    return user;
}
let data2=creatuser("umakant",27)

// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.

function creatuser(name,age){

    this.name=name;
    this.age=age;
    
    }
    creatuser.prototype={
        say:function sayHello(){
    return "hello world"
        } 
    }
    let data3= new creatuser("umakant",28)

// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
function creatuser(name,age){

    this.name=name;
    this.age=age;
    
    }
    creatuser.prototype={
        say:function sayHello(){
    return "hello world"
        } 
    }
    let personone= new creatuser("umakant",28)
    let persontwo=new creatuser("rajput",29 )

// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
personone.say();
persontwow.say()
// 8. Convert the `createUser` function into `User` class.
class creat{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sayhello(){
        alert(`Welcome ${this.name}`)
    }
}
let dataClass=new creat("umakant",27)

// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let person= new creat("rajput",24)
let person1= new creat("lodhi",26)

// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
person.sayhello()
person1.sayhello()
