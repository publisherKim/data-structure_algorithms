function Stack() {
    var items = [];

    this.push = function(element) {
        return items.push(element);
    };
    this.pop = function() {
        return items.pop();
    };
    this.peek = function() {
        return items[items.length - 1];
    };
    this.isEmpty = function() {
        return items.length === 0;
    };
    this.size = function() {
        return items.length;
    };
    this.clear = function() {
        items = [];
    };
    this.print = function() {
        console.log(items);
    }
}

var stack = new Stack();
stack.isEmpty();
stack.push(5); //  [5]
stack.push(8); //  [5, 8]
stack.size(); //  2
stack.push(11); //  [5, 8, 11]
stack.size(); //  3
stack.push(15); // [5, 8, 11, 15]
stack.pop();
stack.pop();
stack.size(); //  2
stack.print(); // [5, 8]