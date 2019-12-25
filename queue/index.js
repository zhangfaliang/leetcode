class MyQueue {
  constructor(length) {
    this.array = new Array(length);
    this.front = 0;
    this.rear = 0;
  }

  enQueue(element) {
    console.log((this.rear + 1) % this.array.length);
    if ((this.rear + 1) % this.array.length === this.front) {
      console.log(' 队列已满！');
    }
    this.array[this.rear] = element;
    this.rear = (this.rear + 1) % this.array.length;
  }

  /**
   * 出队
   */
  deQueue() {
    if (this.rear == this.front) {
      throw new Exception(' 队列已空！');
    }
    const deQueueElement = this.array[this.front];
    this.front = (this.front + 1) % this.array.length;
    return deQueueElement;
  }

  output() {
    for (let i = this.front; i !== this.rear; i = (i + 1) % this.array.length) {
      console.log(this.array[i]);
    }
  }
}

function main() {
  const myQueue = new MyQueue(6);
  myQueue.enQueue(3);
  myQueue.enQueue(6);
  myQueue.enQueue(8);
  myQueue.enQueue(1);
  // myQueue.deQueue();
  // myQueue.deQueue();
  // myQueue.deQueue();
  myQueue.enQueue(2);
  myQueue.deQueue();
  myQueue.enQueue(4);
  myQueue.enQueue(9);
  // myQueue.output();
}
main();
