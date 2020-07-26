class Queue{
  items = [];

  enqueue(ele){
    this.items.push(ele);
  }

  dequeue(){
    this.items.shift();
  }

  front(){
    return this.items[0];
  }

  isEmpty(){
    return this.items.length === 0;
  }

  size(){
    return this.items.length;
  }

  clear(){
    this.items = [];
  }

  print(){
    console.log(this.items.toString());
  }
}
