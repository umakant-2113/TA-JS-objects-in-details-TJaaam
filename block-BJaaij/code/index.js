class BookList{
    constructor(title,category,author,isRead,finishedDate){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=isRead;
        this.finishedDate=finishedDate;
    }
    markBookAsRead(){
        if(this.isRead===true){
            this.finishedDate=Date.now()
        }
    }
}




class Book{
    constructor(allBooks,booksIndex){
    this.allBooks=allBooks;
    this.booksIndex = booksIndex
    }
    add(book){
        this.allBooks=allBooks.push(book)
        return this.allBooks;
    }
    getCurrentBook(index){
        if(this.allBooks.length>index) return this.allBooks[index]

    }
    getNextBook(){
        if(this.allBooks.length>index) return this.allBooks[index+1]  
    }
    getPrevBook(){
        if(this.allBooks.length>index) return this.allBooks[index-1]  
    }
    changeCurrentBook(value){
        this.allBooks=this.allBooks.shift(value)
        return this.allBooks;
    }
}