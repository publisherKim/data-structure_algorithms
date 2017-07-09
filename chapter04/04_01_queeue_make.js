/*
  설계도
  enqueue: 큐의 뒤쪽에 원소들을 추가
  dequeue: 큐의 첫 번째 원소를 반환하고 큐에서 삭제한다.
  front(): 큐의 첫 번쨰 원소를 반환하되 큐 자체는 그대로 놔둔다.(stack의 peek가 비슷한 역활)
  isEmpty(): 큐가 비어 있으면 true 아니면 false를 반환한다.
  size(): 큐의 원소 개수를 반환한다.
 */
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