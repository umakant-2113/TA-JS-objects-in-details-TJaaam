class BookList{
    constructor(title,category,author){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=false;
        this.finishedDate=null;
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date.now()
    }
}




class Book{
    constructor(){
    this.allBooks=[];
    this.booksIndex = 0
    }
    add(book=[]){
        this.allBooks=allBooks.concat(book)
        return this.allBooks;
    }
    getCurrentBook(index){
       return  this.allBooks[this.booksIndex]
    }
    getNextBook(){
        this.booksIndex=this.booksIndex+1 
        return  this.allBooks[this.booksIndex] 
    }
    getPrevBook(){
        this.booksIndex=this.booksIndex - 1; 
        return  this.allBooks[this.booksIndex] 
    }
    changeCurrentBook(value){
        this.booksIndex=value;
        return this.allBooks[this.booksIndex]
    }
}