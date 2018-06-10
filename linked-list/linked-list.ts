class Node {
	constructor(value, next) {
  	this.value = value;
    this.next = next;
  }
}

 class LinkedList {
 
 	constructor() {
  	this.head = null;
  	this.tail = null;
  }
	  
  append(value) {
  const newNode = new Node(value);
  	if(!this.head) {
    	this.head =newNode;
      this.tail =newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  
  prepend(value) {
  	const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  
  delete(value) {
  	if (!this.head) {
      return null;
    }
    let deletedNode = null;
    if(this.head.value == value) {
    	deletedNode = this.head;
    	this.head = this.head.next;
      return deletedNode;
    }
    let currentNode = this.head;
    while(currentNode.next) {
    	if(currentNode.next.value == value) {
      	deletedNode = currentNode;
        currentNode.next = currentNode.next.next;
      }
      else {
      	currentNode = currentNode.next;
      }
    }
    
    if(this.tail.value == value) {
    	this.tail = currentNode;
    }
    
    return deletedNode;
    
  }
}

const linkedList = new LinkedList();
 linkedList.append(1);
 linkedList.append('hammad');
 linkedList.append('yesmeen');
 linkedList.prepend('tiskeen');
 linkedList.delete('1');
 console.log(JSON.stringify(linkedList));