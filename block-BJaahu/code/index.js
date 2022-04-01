

function creatUser(title,option,correctAnswerIndex){
    let user={};
    user.title=title;
    user.option=option;
    user.correctAnswerIndex=correctAnswerIndex;
    user.isAnswerCorrect=function(index){
        return user.correctAnswerIndex===index;
    }
    user.getCorrectAnswer=function(){
        return user.option[correctAnswerIndex];
    }
    return user;
}

let firstQuestion = creatUser('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
let secondQuestio = new Question('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2);

// protypal pattern

let bookMethods={
    isAnswerCorrect:function(index){
        return this.correctAnswerIndex===index;
    },
    getCorrectAnswer:function(){
        return this.option[this.correctAnswerIndex]
    
    }
}
function creatUser(title,option,correctAnswerIndex){
let book=Object.create(bookMethods);
book.name=title;
book.option=option;
book.correctAnswerIndex=correctAnswerIndex;
return book;
}
let data = creatUser('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],3);
let secondQuesti = new Question('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2);
// let data = creatUser('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
// pseudocalssical pattern

function data(title,option,correctAnswerIndex){

this.title=title;
this.option=option;
this.correctAnswerIndex=correctAnswerIndex;

}
data.prototype={
    isAnswerCorrect:function(index){
        return this.correctAnswerIndex===index;
    },
    getCorrectAnswer:function(){
        return this.option[this.correctAnswerIndex]
    
    }
}
let userdata=new Data('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],3);
let secondQuest = new Question('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2);


// class pattern

class Data{
    constructor(title,option,correctAnswerIndex){
        this.title=title;
        this.option=option;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return this.correctAnswerIndex===index;
    };
    getCorrectAnswer(){
        return this.option[this.correctAnswerIndex]
    
    }
}

let user=new Data('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],3);
let secondQuestion = new Question('Where is the capital of Jamaica', ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],2);