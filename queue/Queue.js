class Queue{
  count = 0;
  lowestCount = 0;
  items = {};

  // 判断队列是否为空
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  // 队列的长度
  size() {
    return this.count - this.lowestCount;
  }

  // 向队列添加元素只能添加到队列末尾
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 从队列移除元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]; // {1}
    delete this.items[this.lowestCount]; // {2}
    this.lowestCount++; // {3}
    return result; // {4}
  }

  // 查看队列头元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
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
