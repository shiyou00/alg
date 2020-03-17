class Stack {
  constructor() {
    this.items = []; // {1}
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

const arrStack = new Stack();

arrStack.push("第一个元素");
arrStack.push("第二个元素");
arrStack.push("第三个元素");

console.log('arrStack-elements',arrStack);

arrStack.pop();

console.log('arrStack-elements',arrStack);

console.log('arrStack-peek',arrStack.peek());

console.log('arrStack-peek',arrStack.isEmpty());

console.log('arrStack-peek',arrStack.size());

arrStack.clear();

console.log('arrStack-peek',arrStack.isEmpty());



