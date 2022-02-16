const {LLData} = require('./LLData');

module.exports.LList = class{
    head = null;
    tail = null;
    length = 0;
    
    getFirst(){
      return this.head 
    }
    getLast(){
      return this.tail
    }

    add(value) {
      const node = new LLData(value);
      if (!this.head) {
        this.head = node;
      }
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    }
    addFromArray(arrayOfData){
      arrayOfData.map((item) => this.add(item))
    }

*[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
  removeFromPosition(position){
    if (position < 0 || position > this.length){
      return 'Incorect value position'
    }
    let current = this.head;
    if (position === 0){
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while(index < position){
        prev = current;
        current.next;
        index++
      }
      prev.next = current.next;
    }
    this.length--
  }

  getIndexOf(value) {
    let current = this.head; // current is a head of our list
    let index = 0; // index which will be returned

    while(current) {
        if (current.data === value) {
            return index
        }
        current = current.next;
        index++;
    }
    return -1;
}

  remove(value){
    return this.removeFromPosition(this.getIndexOf(value))
  }

  removeAll(value){
    let current = this.head; // current is a head of our list
    let index = 0; // index which will be returned

    while(current) {
        if (current.data === value) {
            this.removeFromPosition(index)
        }
        current = current.next;
        index++; 
    }
    return -1;    
  }

  contains(value){
    if(!this.head){
      return null;
    }
    let current = this.head;
    while(current){
      if(value !== undefined && current.data === value){
        return true
      }
      current = current.next;
    } 
    return false
  }
  clear(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  count(){
    let current = this.head;
    let count = 0;
    while(current){
      current = current.next;
      count++
    }
    return count
  }
  toString(){
    let node = [];
    let current = this.head;
    while(current){
      node.push(current.data);
      current=current.next;
    }
    return node.join(', ')
  }
  filter(callback){
    let newList = Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)))
    let current = newList.head
    while(current){
      if(!callback(current.data)){
        newList.remove(current.data)
      }
      current = current.next;
    }
    return newList
  }
}