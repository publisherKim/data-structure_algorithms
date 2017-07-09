/*
  stack은 LIFO Last In  First Out
  스택에서 종단점은 top base 둘뿐이다.
  가장 최근 자료는 top 
  가장 오래된 자료는 base에 위치한다.
*/
/*
  push: 스택 꼭대기에 새 원소들을 추가한다.
  pop: 스택 꼭대기에 있는 원소를 반환하고 해당 원소는 스택에서 삭제한다.
  peek: 스택 꼭대기에 있는 원소를 반환하되 스택은 변경하지 않는다.(원소를 삭제하지 않고 참조한다.)
  isEmpty: 스택에 원소가 하나도 없으면 true, 스택의 크기가 0보다 크면 false를 반환한다.
  cear: 스택의 모든 원소를 삭제한다.
  size: 스택의 원소 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.
*/

// 스택의 원소를 담아둘 자료구좀

// stack 생성자 함수

export function Stack() {
    // 프로퍼티와 메서드는 여기에 기술
    var items = [];

    // 메서드
    this.push = function(element) {
        items.push(element);
    };
    this.pop = function() {
        return items.pop();
    };
    // 마지막 요소를 확인
    this.peek = function() {
        return items[items.length - 1];
    };
    // 스택이 비어있는지 참, 거짓으로 확인
    this.isEmpty = function() {
        return items.length === 0;
    };
    // 스택의 크기
    this.size = function() {
        return items.length;
    };
    // 스택 비우기
    this.clear = function() {
        items = [];
    };
    this.print = function() {
        console.log(items.toString());
    }
}