

function data(name, id, noOfProjects) {
    let user = {}
    user.name = name;
    user.id = id;
    user.numberOfProject = noOfProjects;
    user.getproject = function () {
        return user.numberOfProject;
    },
        user.chageName = function (name) {
            user.name = name;
            return user.name;
        },
        user.incrementProject = function (value = 1) {
            user.numberOfProject += value;
            return user.numberOfProject;
        },
        user.decrementProject = function (value = 1) {
            user.numberOfProject -= value;
            return user.numberOfProject;
        }
    return user
}
let data1 = data("umakant", "lodhiumakant800@gmail.com", 60)
let data2 = data("rajput", "example@gmail.com", 10);

// prototypal pattern

function dataUser(name, id, noOfProjects) {
    let user=Object.create(dataMethod)
    this.name = name;
    this.id = id;
    this.numberOfProject = noOfProjects
    
}

let dataMethod = {
    getProjetct: function () {
        return this.numberOfProject
    },
    chnageName: function (name) {
        this.name = name;
        return this.name;
    },
    increment:function(value=1){
        this.numberOfProject+=value;
        return  this.numberOfProject;
    },
    decrement:function(){
        this.numberOfProject -=value;
        return this.numberOfProject

    }

}
let data3 = data("umakant", "lodhiumakant800@gmail.com", 60)

// pseudoclassical pattern

function userdata(name,id,noOfProjects){
    this.name=name;
    this.id=id;
    this.noOfProjects=noOfProjects;

}
userdata.prototype={
    getProjetct: function () {
        return this.numberOfProject
    },
    chnageName: function (name) {
        this.name = name;
        return this.name;
    },
    increment:function(value=1){
        this.numberOfProject+=value;
        return  this.numberOfProject;
    },
    decrement:function(){
        this.numberOfProject -=value;
        return this.numberOfProject

    }
}
let data4 = data("umakant", "lodhiumakant800@gmail.com", 60)

// class pattern

class Userdata{
    constructor(name,id,noOfProjects){
        this.name=name;
        this.id=id;
        this.noOfProjects=noOfProjects
    }
    getProjetct () {
        return this.numberOfProject
    };
    chnageName (name) {
        this.name = name;
        return this.name;
    };
    incremen(value=1){
        this.numberOfProject+=value;
        return  this.numberOfProject;
    };
    decremen(){
        this.numberOfProject -=value;
        return this.numberOfProject

    }
}
let data5 = data("umakant", "lodhiumakant800@gmail.com", 60)
