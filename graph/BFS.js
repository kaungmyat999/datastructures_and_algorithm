class Vertex{
    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class BFS{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Vertex(value);
        if(!this.root) return this.root = newNode;
        let temp = this.root;
        while(true){
            if(value === temp.value) return undefined;

            if(value > temp.value){
                if(temp.right == null){
                    temp.right = newNode;
                    return true;
                }
                temp = temp.right;

            }

            if(value < temp.value){
                if(temp.left == null){
                    temp.left = newNode;
                    return true;
                }
                temp = temp.left;

            }
        }
    }

    cointain(value){
        if(this.root == null) return "The tree is empty!";
        let temp = this.root;
        while(true){
            if(value > temp.value){
                temp = temp.right;
            }else if (value < temp.value){
                temp = temp.left;
            }else {
                return temp;
            }
        }
        return "Value Doesn't cotain in this tree!";


    }
    BFS(){
        let currentNode = this.root;
        let queue = [];
        let result = [];
        queue.push(this.root);
        while(queue.length>0){
            currentNode = queue.shift()
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
            result.push(currentNode.value);
        }
        return result;
    }

    tranversed(orderTypeInput){
        let orderType = orderTypeInput.toLowerCase();
        if(this.root == null) return "Tree is empty!";
        let temp = this.root;
        let result = [];
        switch (orderType){
            case "preorder":
                check(temp);
                function check(currentNode){
                    result.push(currentNode.value);
                    if(currentNode.left) check(currentNode.left);
                    if(currentNode.right) check(currentNode.right);
                }
                break;
            case "postorder":
                check2(temp);
                function check2(currentNode){
                    if(currentNode.left) check(currentNode.left);
                    if(currentNode.right) check(currentNode.right);
                    result.push(currentNode.value);

                }
                break;
            case "inorder":
                check3(temp);
                function check3(currentNode){
                    if(currentNode.left) check(currentNode.left);
                    result.push(currentNode.value);
                    if(currentNode.right) check(currentNode.right);
                }
                break;
        }
        return result;

    }
    DFS_PreOrder () { 
       return this.tranversed("PreOrder");
    }

    DFS_PostOrder(){ return this.tranversed("postorder"); }

    DFS_InOrder() { return this.tranversed("inorder");}
    
}

let myTree = new BFS();
myTree.insert(47)
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
myTree.DFS_PreOrder();
