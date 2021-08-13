class Node {
    constructor(value){
        this.value = value;
        this.next  = null;
        this.prev  = null;
    }
}

class Double_LinkedList{
    constructor(value){
        let newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail = this.head;
        }else{
            this.tail.next=newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length===0)return undefined;
        let temp = this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
            
        }else{
            
            while(temp.next){
                temp = temp.next;
            }
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev=null;
        }
        this.length--;
        return temp;
    }

    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return newNode;
        
    }

    shift(){
        if(!this.head) return undefined;
        if(this.length ===1){
            this.head=null;
            this.tail=null;
        }else{
            let temp = this.head;
            this.head=this.head.next;
            this.head.prev=null;
            temp.next = null;
        }
        this.length--;
        return this;
    }

    get(index,value){
        if(index<0 || index>=this.length) throw 'The index is out of range!';
        let temp=this.head;
        if(index<this.length/2){
            for(let i=0;i<index;i++){
                temp=temp.next;
            }
        }else{
            temp = this.tail;
            for(let i=this.length-1;i>index;i--){
                temp=temp.prev;
            }
        }
        return temp;
    }

    set(index,value){
        let indexNode = get(index);
        if(indexNode){
            indexNode.value= value
            return indexNode
        }
        throw `Index can't find!`
    }

    insert(index,value){
        if(index<0 || index > this.length) return undefined;
        let newNode = new Node(value);
        if(!this.head){
            this.unshift(newNode);
        }else if(index===this.length){
            this.push(newNode);
        }else{
            let beforeIndexNode =this.get(index-1);
            let afterIndexNode =this.get(index);
            beforeIndexNode.next=newNode;
            afterIndexNode.prev =newNode;
            newNode.next=afterIndexNode;
            newNode.prev=beforeIndexNode;
        }
        this.length++;  
        return this;
    }

    remove(index){
        if(index<0 || index > this.length) return undefined;
        let indexNode =this.get(index);
        if(index===this.length){
            this.pop();
        }else if(index===0){
            this.shift();
        }else {
            let beforeIndex= this.get(index-1)
            let afterIndex = this.get(index+1);
            beforeIndex.next=afterIndex;
            afterIndex.prev = beforeIndex;
            indexNode.prev=null;
            indexNode.next =null;
        }
        this.length--;
        return indexNode;
    }
    
}

let double_LinkedList = new Double_LinkedList(1);
double_LinkedList.push(2);
double_LinkedList.push(3);
double_LinkedList.get(2);
double_LinkedList.get(3);

