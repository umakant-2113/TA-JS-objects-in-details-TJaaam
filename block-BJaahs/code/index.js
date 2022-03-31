let user={
    title:"capital of india",
    option:['Tashkent', 'Amaan', 'Delhi', 'Nairobi'],
    correctAnswerIndex: 2,
   isAnswerCorrect(index){
       return index === user.correctAnswerIndex
   },
   getCorrectAnswer(){
       return user.option[user.correctAnswerIndex]
   } 
}

function creatUser(title,option,index){
    let user={}
    user.tatle=title,
    user.option=option,
    user.correctAnswerIndex=index,
    user.isAnswerCorrect=function(index){
        return index===user.correctAnswerIndex;
    },
    user.getCorrectAnswer=function(index){
        return user.option[correctAnswerIndex]
    }
    return user
    }
    let user1 =creatUser('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
