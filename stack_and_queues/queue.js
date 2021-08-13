import Node from "./node";

class Queue{
    constructor(value){
        let newNode = new Node(value);
        this.first =newNode;
        this.last = newNode;
        this.length = 1;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last =newNode;
        }else{
            this.last.next= newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }   

    dequeue(){
        if(this.length===0) return undefined;
        if(this.length===1){
            this.first = null;
            this.last =null;
        }else{
            let temp = this.first;
            this.first=temp.next;
            temp.next =null;
        }
        this.length--;
        return this;
    }
}

