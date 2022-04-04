let animalMethod={
    eat:function(){
      console.log(`I live in ${this.location} and I can eat`)  
    },
    changeLocation:function(newLocation){
        this.location=newLocation;
        return this.location
    },
    summary:function(){
      returns `I live in ${this.location} and I have ${this.numberOfLegs}` 
    }
}
let dogMethod={
  bark:function(){
    alert(`I am ${this.name} and I can do mewo meow 😹`)
  },
  changeName:function (changeName){
    this.name=changeName;
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

let catMethod={
meow:function(){
  alert(`I am ${this.name} and I can do mewo meow 😹`)
},
changeName:function(name){
  this.name=name;
  return this.name;
},
changeColorOfEye:function(newColor){
this.eyeColor=newColor;
return this.eyeColor;
},
summary:function(){
  returns `I am ${this.name} and the color of my eyes are ${this.eyeColor}. I can also do meow meow`
}
}


function animal(location,numberOfLegs){
let user=Object.create(animalMethod)
user.location=location;
user.numberOfLegs=numberOfLegs;
return user;
}

function dog(name,color){
let dog=Object.create(dogMethod);
dog.name=name;
dog.color=color;
return dog;
}

function cat(name,colorOfEyes){
let cat=Object.create(catMethod);
cat.name=name;
cat.eyeColor=colorOfEyes;
return cat;
}
Object.setPrototypeOf(animalMethod,catMethod)
Object.setPrototypeOf(catMethod,dogMethod)
let user1= animal("rath",4);
let user2=dog("kallo","black");
let user3 = cat("sweety","yellow")