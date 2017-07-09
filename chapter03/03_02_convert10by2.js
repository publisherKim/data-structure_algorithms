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

function divideBy2(decNumber) {
    // remStack 이라는 빈공간을 하나 만든다.
    var remStack = new Stack(),
        rem, binaryString = '';

    // 인자의 값이 0보다 크다면 rem 에다가 2로나눈 나머지를 할당하고 remStack 푸쉬한다.
    // decNumber를 2로나눈 몫을 저장하며 0보다 같거나 작아질떄까지 반복한다. 
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    // remStack의 원소가 하나도 없을때까지 꺼내서 문자열을 더한다.
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    // binaryString을 반환한다.
    return binaryString;
}