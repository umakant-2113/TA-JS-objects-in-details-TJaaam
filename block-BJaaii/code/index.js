class Stack {
    constructor() {
        this.stack = []
    }
    push(value) {
        this.stack.push(value)
    }
    pop() {
        return this.stack.pop()
    }
    peek(opt) {
        if (opt !== 0) {
            this.stack.push()
            return this.stack.shift()
        } else {
            this.stack[this.stack.length - 1]
        }
    }
    reverse() {
        return this.stack.reverse()
    }
    isEmpty() {
        if (this.stack === []) {
            return true;
        } else {
            return false;
        }
    }
    displayStack() {
        return this.stack.join("")
    }
}
let myStack = new Stack();
myStack.push('One');
myStack.push('Two');
console.log(myStack.length); // 2
console.log(myStack.peek()); // "Two"
console.log(myStack.peek(0)); // "One"
console.log(myStack.reverse()); // ['Two', 'One']
console.log(myStack.displayStack()); // 'Two One'
myStack.pop();
console.log(myStack.length); // 1
console.log(myStack.peek()); // 'Two'
console.log(myStack.isEmpty()); // false
myStack.pop();
console.log(myStack.isEmpty());


class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(val) {
        this.queue.push(val)
    }
    dequeue() {
        return this.queue.unshift()
    }
    peek(opt) {
        if (opt === "") {
            this.queue.unshift()
        } else  {
            this.queue[opt]
            if(opt>this.queue.length){
                alert(`this is not exits`)
            }
        }
    }
    isEmpty() {
        if (this.queue.length === 0) {
            return true
        } else {
            return false;
        }
    }
    displayQueue() {
        return this.queue.join("")
    }
}

let atmQueue = new Queue();
atmQueue.enqueue('Aman');
atmQueue.enqueue('John');
atmQueue.enqueue('Rohan');
console.log(atmQueue.displayQueue()); // "Aman John Rohan"
console.log(atmQueue.length); // 3
console.log(atmQueue.peek()); // "Aman"
console.log(atmQueue.peek(1)); // "John"
atmQueue.dequeue();
console.log(atmQueue.length); // 2
console.log(atmQueue.peek()); // 'John'
console.log(atmQueue.isEmpty()); // false
atmQueue.dequeue();
atmQueue.dequeue();
console.log(atmQueue.isEmpty());