//--------------------------------------------------------|Queue Implementation Optimized|---------------------------------------------------
/*
Queue Implementation: 
enqueue(element) - add an element to the queue  
dequeue() - remove the oldest element from the queue  
peek() - get the value of the element at the front of the queue without removing it  
isEmpty() - check if the queue is empty  
size() - get the number of elements in the queue  
print() - visualize the elements in the queue
*/

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();
