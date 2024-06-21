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
        return this.next;
    }

    print() {

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

console.log(ll);