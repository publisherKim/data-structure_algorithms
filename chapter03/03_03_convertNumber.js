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

function baseConverter(decNumber, base) {
    var remStack = new Stack(),
        rem, baseString = '',
        digits = "0123456789ABCDEF";

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while (!remStack.isEmpty()) {
        // 문자열의 인덱스를 활용해서 십보다 큰 수를 변환해서 값을 추출할 수 있다.
        baseString += digits[remStack.pop()];
    }

    // binaryString을 반환한다.
    return baseString;
}

// test
baseConverter(10, 16);
baseConverter(10, 8);
baseConverter(10, 4);
baseConverter(10, 2);