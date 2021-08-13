import Node from "./node";

class Stack{
    constructor(value){
        let newNode = new Node(value);
        this.top = newNode;
        this.length =1;
    }

    push(value){
        let newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
            
        }else{
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return newNode;
    }

    pop(){
        if(this.length ===0) return undefined;
        let temp = this.top;
        if(this.length ===1){
            this.top = null;
        }else{
            this.top = temp.next
            temp.next = null;
        }
        this.length--;
        return temp;

    }
}

let stack =new Stack(1);
stack.push(2);
stack.push(3);
stack.pop();