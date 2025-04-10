// se crea el stack tal cual como estaban en las diapos 
class Stack {
    constructor() {
        this.items = [];
    }

    push(book) {
        this.items.push(book);
    }

    pop() {
        return this.items.length > 0 ? this.items.pop() : null;
    }

    peek() {
        return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        this.items.slice().reverse().forEach(item => {
            console.log(item);
        });
    }

    getAllBooks() {
        return [...this.items].reverse(); 
    }
}

export default Stack;