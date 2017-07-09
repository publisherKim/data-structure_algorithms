function Queue() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
    }
    this.dequeue = function() {
        return items.shift();
    }
    this.front = function() {
        return items[0];
    }
    this.isEmpty = function() {
        return items.length === 0;
    }
    this.size = function() {
        return items.length;
    }
    this.print = function() {
        console.log(items);
    }
}

var queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Smith');
queue.enqueue('Kamila');

queue.print(); // ["John", "Smith", "Kamila"]
queue.size(); // 3
queue.dequeue(); // John
queue.dequeue(); // Smith
queue.dequeue(); // Kamila
queue.print(); // []