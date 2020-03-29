class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 判断队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  // 队列的长度
  size() {
    return this.count - this.lowestCount;
  }

  // 向双端队列的前端添加元素
  addFront(element) {
    if (this.isEmpty()) { // {1}
      this.addBack(element);
    } else if (this.lowestCount > 0) { // {2}
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) { // {3}
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // {4}
    }
  }

  addBack(element){
    this.items[this.count] = element;
    this.count++;
  }


  // 从队列移除元素
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }

  // 该方法会从双端队列后端移除第一个元素
  removeBack(){
    if (this.isEmpty()) {
      return undefined;
    }
    delete this.items[this.count];
  }

  // 该方法返回双端队列前端的第一个元素
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 该方法返回双端队列后端的第一个元素
  peekBack(){
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count];
  }

  // 清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // 重写toString方法
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
