

class Node {
    constructor (value) {
        this.value = value;
        this.next=null;
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail =this.head;
        this.length =1;
       
    }

    push(value){
        let node = new Node(value)
        if(!this.head){
            this.head = value;
            this.tail =this.head;
        }
        this.tail.next = node
        this.tail =node;
        this.length++;
        return this;
    }
    
    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let pre= this.head;
        while(temp.next){
            pre =temp;
            temp = temp.next
        }
        this.tail=pre;
        this.tail.next=null;
        

        if(this.length===1){
            this.head = null;
            this.tail = null;
            
        }
        this.length--;
        return temp;
    }

    unshift(value){
        let node = new Node(value);
        if(!this.head){
            this.head=node;
        }
        node.next = this.head;
        this.head=node;
        this.length++;
        return this;
    }

    shift(){
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        if(this.length===1){
            this.head =null;
            this.tail =null;
        }
        this.length--;
        console.log(this.head);
        return this;
    }

    get(index){
        if(index<0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i=0; i<index;i++){
            temp=temp.next
        }
        return temp;
    }

    set(index,value){

        let setNode = this.get(index);
        if(setNode){
            setNode.value = value
            return setNode;
        }
        return false;
    }

    insert(index,value){
        if(index<0 || index>this.length) return undefined;
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value)


        let newNode = new Node(value);
        let beforeIndex = this.get(index-1);
        let afterIndex = this.get(index);
        beforeIndex.next = newNode;
        newNode.next = afterIndex;
        this.length++;
        return this;
    }

    remove(index){
        if(index<0 || index>=this.length) return undefined;
        if(index === this.length-1) return this.pop();
        if(index === 0) return this.shift();

        let beforeIndex = this.get(index-1);
        let indexNode  = this.get(index)
        beforeIndex.next=indexNode.next;
        indexNode.next=null;
        this.length--;
        return indexNode;
    }

    reverse(){
        let temp = this.head;
        this.head= this.tail;
        this.tail = temp
        let next = temp.next;
        let pre = null;
        for(let i=0 ; i<this.length ;i++){
            next = temp.next
            temp.next = pre;
            pre =temp;
            temp = next
        }
        return this;
    }
    
}

let list = new LinkedList(1)
list.push(2);
list.push(3);
list.reverse()
