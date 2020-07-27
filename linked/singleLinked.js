class LinkedNode{
  constructor(ele) {
    this.ele = ele;
    this.next = null;
  }
}

class SingleLinked{
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(ele){
    const node = new LinkedNode(ele);
    let cur = null;
    if(this.head){
      cur = this.head;
      while(cur.next){
        cur = cur.next;
      }
      cur.next = node;
    }else{
      this.head = node;
    }
    this.length ++;
  }

  insert(pos,ele){
    if(pos<0 || pos>this.length){
      return false;
    }
    const node = new LinkedNode(ele);
    let cur = this.head; // 指针1
    let prev = null; // 指针2
    let index = 0;
    if(pos === 0){ // 插入第0位时，相当于head节点变为node节点
      node.next = cur;
      this.head = node;
    }else{
      // 从头节点依次遍历，找到要插入的位置，然后更换相应节点的指向
      while(index < pos){
        index++;
        prev = cur;
        cur = cur.next;
      }
      node.next = cur;
      prev.next = node;
    }
  }

  remove(pos){
    if(pos<0 || pos > this.length ){
      return null;
    }
    let cur = this.head;
    let prev = null;
    let index = 0;

    // 删除头节点
    if(pos === 0){
      this.head = cur.next;
    }else{
      while (index < pos){
        index++;
        prev = cur;
        cur = cur.next;
      }
      prev.next = cur.next;
    }
    this.length --;
    return cur.ele;
  }
}

const linked = new SingleLinked();

linked.append("1");
linked.append("2");
linked.insert(1,"3");
linked.remove(1);

console.log(linked);

