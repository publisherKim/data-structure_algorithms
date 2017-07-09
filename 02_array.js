// 배열의 생성과 초기화
var dayOfWeek = new Array(); //  []
var dayOfWeek = new Array(7); //  [, , , , , ,]
var dayOfWeek = new Array('sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'); // ['sun', ..., 'sat'];

var dayOfWeek = [];

var dayOfWeek = ['sun', 'mon', 'tues', 'wed', 'thu', 'fri', 'sat'];

for (var i = 0; i < dayOfWeek.length; i++) {
    console.log(dayOfWeek[i]);
}

// sun mon tues wed thu fri sat

// 20개의 원소를 가진 finabonacci 만들기
var finabonacci = [];
finabonacci[0] = 1;
finabonacci[1] = 2;

for (var i = 2; i < 20; i++) {
    finabonacci[i] = finabonacci[i - 1] + finabonacci[i - 2];
}
console.log(finabonacci);

// [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946];

// 원소 추가와 삭제
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers[numbers.length] = 10;
console.log(numbers);
// [0,1,2,3,4,5,6,7,8,9,10]

// 배열의 뒤에 원소를 추가하는 함수인 push를 이미 선언해 놓았다.
numbers.push(11);
numbers.push(12, 13);
console.log(numbers);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 배열의 앞에 원소를 추가하는 법
for (var i = numbers.length; i >= 0; i--) {
    // numbers.length = 마지막 원소가 n 이라면 n+1의 값이다.
    // 즉 배열을 한칸씩 뒤로 무린 결과가 되고 numbers[0] = undefined 값이 들어간다
    // for 문을 순회하고 나오면 [,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]이렇게 될것이다.
    numbers[i] = numbers[i - 1];
}
// [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 실제 코드의 결과
numbers[0] = -1;
// [-1,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// 이미 배열 객체에는 unshift라는 메서드가 존재한다.
numbers.unshift(-2);
numbers.unshift(-4, -3);
// [-4, -3, -2, -1,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -13]

// 마지막 원소를 삭제하는 메서드 관념적으로 꺼낸다라는 개념으로 이해하는게 맞을것 같기도 마지막 원소를 반환할테니
numbers.pop();
// [-4, -3, -2, -1,0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i + 1];
}

// [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 undefined]
// 배열의 값들을 한 칸 앞으로 덮어 씌웠을 뿐 실제로 복사가 이루어진 것은 아니다.

// 배열의 특정위치에 원소를 추가 삭제하기
numbers.splice(5, 3);

// 배열의 다섯번째 위치  다음부터 3개의 원소를 삭제한다. 혹은 5번째 다음원소 3개를 반환한다 [2,3,4]
// [-3, -2, -1, 0, 1, 5, 6, 7, 8, 9, 10, 11, 12, undefined]

numbers.splice(5, 3, 5, 6, 7);

// 결과는 6,7,8을 삭제하고 다시 6,7,8을 반환하니 결과는 동일하다.

// 2차원배열 
var temp = [];
temp[0] = [72, 75, 79, 79, 81, 81];
temp[1] = [81, 79, 75, 75, 73, 72];

// temp의 형테 [[72, 75, 79, 79, 81, 81], [81, 79, 75, 75, 73, 72]];
// 실질적으로 자바스크립는 행렬을 지원하는건 아니나 형태를 보아하면 행령이나 다름이 없다.
// temp[0][0] -> 72

function printMatrix(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

// 3차원 정방 행렬 만들기
function matrix3(name, max) {
    var name = [];
    for (var i = 0; i < max; i++) {
        name[i] = [];
        for (var j = 0; j < max; j++) {
            name[i][j] = [];
            for (var z = 0; z < max; z++) {
                name[i][j][z] = i + j + z;
            }
        }
    }
}

// [[]] -> [[[]]] -> [[[[0,1,2]]]] -> [[[[0,1,2]]], []] -> [[[[0,1,2]]], [[]]] -> [[[[0,1,2]]], [[1,2,3]]]...

function matrix3Find(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            for (var z = 0; z < arr[j].length; z++) {
                console.log(arr[i][j][z]);
            }
        }
    }
}

/*
    0 1 2
    1 2 3
    2 3 4
    1 2 3
    2 3 4
    3 4 5
    2 3 4 
    3 4 5 
    4 5 6
*/

// 여러 배열 합치기
var zero = 0;
var positiveNumbers = [1, 2, 3];
var negativeNumbers = [-3, -2, -1];
var numbers = negativeNumbers.concat(zero, positiveNumbers);

// 숫자를 넘기든 배열을 넘기든 합쳐주고 인자로 여러개를 넘겨도 된다.

// 반복자 함수
var isEven = function(x) {
    console.log(x);
    console.log(x % 2 == 0);
    return x % 2 == 0;
};
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.every(isEven);
// every 함수는 딱한번만 실행되고 종료 한다. 1 => false;

numbers.some(isEven);
// some 함수는 참이 나올떄까지 반복을 수행한다. 이 조건에서 2번째 원소가 참이므로 두번째에 종료된다.

numbers.forEach(isEven);
// forEach 배열을 순회하고 싶을때 쓴다. 반환 값이 없다.

var myMap = numbers.map(isEven);
// 결과를 배열로 반환한다.
// [false, true, false, true, false, true, false, true, false, true]

var filter = numbers.filter(isEven);
// 참인 결과를 배열로 반환한다.
// [2, 4, 6, 8, 10]

numbers.reduce(function(prev, curr, index) {
    return prev + curr;
});
// 이전 요소와 다음 요소의 합 결과적으로 55
// 1+2,  3+3, 6+4, 10+5, ... ,45+10 => 55

numbers.reverse();
// 배열 요소의 순서를 뒤집는다.
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

numbers.sort();
// 소트는 모든 원소를 문자열로 취급해 사전적으로 정렬을 하기 떄문이다.
// [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// 그러므로 비교 로직을 만들어 처리해야한다.

numbers.sort(function(a, b) {
    return a - b;
});
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 또는 아래와 같은 표현도 가능하다.
function compare(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
// 콜백함수의 결과를 기준으로 정렬 기준을 바꿀수 있다.
numbers.sort(compare);


// 사용자 정의 정렬
var friends = [
    { name: 'John', age: 34 },
    { name: 'Smith', age: 20 },
    { name: 'Jack', age: 30 }
];

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
var test = friends.sort(comparePerson);

// 문자열 정렬
var names = ['Ana', 'ana', 'Jhon', 'jhon'];
names.sort();
// ["Ana", "Jhon", "ana", "jhon"]
// 영어의 아스키 코드 정렬상 대문자가 소문자보다 앞에 있다.

names.sort(function(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
});

// 검색
numbers.indexOf(10);
// 9
numbers.indexOf(100);
// -1

// 배열을 문자열로 변환
console.log(numbres.toString());
// 1,2,3,4,5,6,7,8,9,10

var numbersString = numbers.join('-');
// "1-2-3-4-5-6-7-8-9-10"
// join 메서드를 활용하면 구분자를 활용 할 수 가 있다.