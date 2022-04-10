class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(value){
        this.value=value;
        return `my name is ${this.name} and i am eating ${this.value}`

    }
    walk(){
    return `he can not walk `
    }
    sleep(){
        return `he can not sleep`
    }
}

class Player extends Person{
    constructor(sportsName,name,age,gender){
        super(name,age,gender)
        this.sportsName=sportsName;
    }
    play(){
        return `my name is ${this.name} and i can play ${this.sportsName}`
    }
}

class Teacher extends Person{
    constructor( instituteName,name,age,gender){
        super(name,age,gender)
        this.instituteName=instituteName
    }
    teach(value){
        this.value=value;
        return `my name is ${this.name} and i can teach ${this.instituteName} ${this.value} `
    }
}

class Artist extends Person{
    constructor(kind,name,age,gender){
        super(name,age,gender)
        this.kind=kind;
    }
    creatAtrs(){
        return `my name is ${this.name} and i am ${this.kind} `
    }
}

class Cricketer extends Player{
    constructor(teamName,sportsName){
        super(sportsName)
        this.teamName=teamName
    }
    playCricket(gameName){
        this.gameName=gameName
        return `my team name  is ${this.teamName} i can play ${this.gameName} `
    }
    
}