class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    append(value) {
        let newNode = new Node(value, null);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        console.log(current);
        return current;
    }

    at(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        let previous;
        let current = this.head;
        while (current.nextNode !== null) {
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        this.size--;
    }

    contains(value) {
        let current = this.head;
        if (current.value === value) {
            return true
        } while (current.nextNode !== null) {
            current = current.nextNode;
            if (current.value === value) {
                return true;
            }
        }
        return false;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.prepend(300);
ll.append(400);
ll.append(600);

// [300, 200, 100, 400, 600]

ll.pop();
ll.pop();
console.log(ll);
ll.tail();
console.log(ll.contains(100));
console.log(ll.contains(30));