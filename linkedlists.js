class LinkedList {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    append(value) {
        new Node(value, null)
    }

    prepend(value) {
        new Node(value, nextNode = LinkedList.next)
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}