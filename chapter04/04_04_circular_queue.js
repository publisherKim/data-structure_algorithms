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

// 뜨거운감자를 들고 있는 사람은 제거된다.
function hotPotato(nameList, num) {
    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]); // 이름들은 순서대로 큐에 쌓는다.
    }
    var eliminated = '';
    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // 맨앞의 원소를 꺼내어 맨 뒤에 넣는다.
        }
        eliminated = queue.dequeue(); // num 개수만큼 원소를 뒤로 돌리고 맨앞의 원소를 제거한다.
        console.log(eliminated + '을(를) 뜨거운 감자에서 퇴장한다.');
    }
    return queue.dequeue(); // 마지막막에 남은 원소를 반환한다.
}

var names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
var winner = hotPotato(names, 7);
console.log(winner);