function animal(location,numberOfLegs){
this.location=location;
this.numberOfLegs=numberOfLegs;
}

animal.prototype={
eat:function(){
  console.log(`I live in ${this.location} and I can eat`)
},
changeLocation:function(newLocation){
this.location=newLocation;
return this.location;
},
summary:function(){
  returns `I live in ${this.location} and I have ${this.numberOfLegs}`
}
}


function dog(name,color){
this.name=name;
this.color=color;
animal.apply(this,[location,numberOfLegs])
}
dog.prototype={
bark:function(){
  alert(`I am ${this.name} and I can bark 🐶`)
},
changeName:function(newName){
  this.name=newName;
  return this.name;
},
changeColor:function(newColor){
this.color=newColor;
return this.color;
},
summary:function(){
  returns `I am ${this.name} and I am of ${this.color} color. I can also bark`
}
}
Object.setPrototypeOf(dog.prototype,animal.prototype);


function cat(name,colorOfEyes){
this.name=name;
this.colorOfEyes=colorOfEyes;
dog.apply(this,[name,color])
}

cat.prototype={
meow:function(){
  alert(`I am ${this.name} and I can do mewo meow 😹`)
},
changeName:function(name){
  this.name=name;
},
changeColorOfEyes:function (newColor){
  this.color=newColor
  return this.color;
},
summary:function(){
  returns `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
}
}

Object.setPrototypeOf(cat.prototype,animal.prototype);

// class pattern

class Animal{
  constructor(location,numberOfLegs){
    this.location=location;
    this.numberOfLegs=numberOfLegs;
  }
  eat(){
    console.log(`I live in ${this.location} and I can eat`)
  };
  changeLocation(newLocation){
  this.location=newLocation;
  return this.location;
  };
  summary(){
    returns `I live in ${this.location} and I have ${this.numberOfLegs}`
  }
}

class dog extends animal{
  constructor(name,color)
  super(location,numberOfLegs)
  this.color=color;
}

