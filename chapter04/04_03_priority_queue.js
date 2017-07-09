/*
  queue 빠져 나가는 순서의 우선순위를 정해 보자.
 */
function PriorityQueue() {
    var items = [];

    // 우선순위를 받을수 있는 객체를 만들어서 두번쨰 인자로 전달한다.
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            // 원소의 개수가 있으면 우선순위를 비교해서 새 원소를 삽입한다.
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElement); // 우선순위가 낮다면 원소의 제일 뒤에 삽입한다.
            }
        }
    };

    this.dequeue = function() {
        return items.shift();
    };
    this.front = function() {
        return items[0];
    };
    this.isEmpty = function() {
        return items.length === 0;
    };
    this.size = function() {
        return items.length;
    };
    this.print = function() {
        console.log(items);
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
        }
    };
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2);
priorityQueue.enqueue('Smith', 1);
priorityQueue.enqueue('Kamila', 1);
priorityQueue.print();