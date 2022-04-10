let previousBtn = document.querySelector('.previous');
let nextBtn = document.querySelector('.next');
let form = document.querySelector('form');
let showAnswer  = document.querySelector('.showAnswer');
let totalQuestionCount = document.querySelector('.totalQuestion');
let quizQuestions  = [
    {
        title : "What is the capital of Himachal pradesh ",
        options  : ["Shimla" , "Mandi" , "Kullu"],
        correctIndex : 0,
    } ,
    {
        title : "A function is of which type " , 
        options : ["number" , "Boolean" , "String" ,"Object"],
       correctIndex  : 3, 
    },
    {
        title :" Which   tag is used to link Exeternal js", 
        options :["script " , "link" , "a"] ,
       correctIndex  : 0, 
    },
    {
        title : "Function Statement is also known as", 
        options : ["Function declaration " , "function definition" , "function Expression"],
       correctIndex  : 0 , 
    },
    {
        title : "Can we store a fucntion inside a variable", 
        options :["yes " , "no"] ,
       correctIndex  : 0, 
    },
    {
        title : "Can we pass a function inside a funtion", 
        options : ["yes" , "no"],
       correctIndex  :  0, 
    },
    {
        title : " To  get a single  value from array we use",
        options : ["filter" ,"Reduce" , "map" , "forEach"],
        correctIndex : 2 ,
    }
];


let root = document.querySelector('fieldset');
class QuestionMethods {
    constructor(title,options,correctAnswer){
        this.title  = title;
        this.options =options;
        this.correctAnswerIndex =correctAnswer ;
    }
    isCorrect(answer){
        if(this.options[this.correctAnswerIndex] === answer){
            return true;
        }
        return false;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}


class Quiz {
    constructor(question = [] , score = 0 ){
        this.allQuestion = question;
        this.activeIndex = 3 ;
        this.score = score; 
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1 ;
    }
    previousQuestion(){
        this.previousIndex = this.previousIndex-1;
    }
    addQuestion(title,options,corrextIndex){
        let question = new QuestionMethods(title,options,corrextIndex);
        this.allQuestion.push(question);
    }
    incrementScore(){
        this.score = this.score+1;
    }
    createUI(){
        root.innerHTML = "";
        showAnswer.innerText = "";
        showAnswer.style.padding = "0px";
        let activeQuestion = this.allQuestion[this.activeIndex];
        let legend = document.createElement('legend');
        legend.innerText = activeQuestion.title;
        let optionContainer = document.createElement('div');
        activeQuestion.options.forEach((eachOption , index)=>{
            let label  = document.createElement('label');
            let input = document.createElement('input');
            let inputoption = document.createElement('div')
            input.type= "radio";
            input.name  = 'option';
            input.id = `option${index}`;
            input.value = eachOption;
            label.for =`option${index}`;
            label.innerText = eachOption ; 
            inputoption.append(input, label);
            optionContainer.append(inputoption);
            form.addEventListener("submit", function(event){
                event.preventDefault();
                if(input.checked){
                    if(activeQuestion.isCorrect(input.value)){
                        showAnswer.innerText = `Correct Answer`;
                        showAnswer.style.padding = ".8rem";
                    }
                    else{
                        showAnswer.innerText = `Incorrect Answer `;
                        showAnswer.style.padding = ".8rem";
                    }
                }
            })
        });        
        root.append(legend,optionContainer );
        return root ;
    }
}
let quiz = new Quiz();
quizQuestions.forEach(eachQuestion =>{
    quiz.addQuestion(
        eachQuestion.title, 
        eachQuestion.options,
        eachQuestion.correctIndex
    );
});

previousBtn.addEventListener("click", function(){
    console.log("Previous Button clicked");
    quiz.previousQuestion();
    quiz.createUI();

});
// When we click on the next button  

nextBtn.addEventListener("click", function(){
    console.log("Next Button got clicked");
    quiz.nextQuestion();
    quiz.createUI();

});
quiz.createUI();
// total number of question 

totalQuestionCount.innerText = `Total Question : ${quiz.allQuestion.length}`;
