// make object 2 way
var obj = new Object;
var obj = {};

// make object && init
var obj = {
    name: {
        first: 'gandalp',
        last: 'gray'
    },
    address: 'middle'
};

// oop basic

function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var instance1 = new Book('제목', '페이지수', '일련번호');
// instance1 {title: '제목', pages:'페이지수', isbn: '일련번호'}


// 자바 스크립트는 스크립트언어라 객체를 만든후 생성자 함수의 프로토 타입에 함수를 추가하여도 호출이 가능하다.
Book.prototype.printTitle = function() {
    console.log(this.title);
}
instance1.printTitle();

// 생성자 함수 내부에 직접 함수 선언도 가능하다. 
function Book2(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log(this.isbn);
    }
}
var instance2 = new Book2('제목2', '페이지수2', '일련번호2');

instance2.printIsbn();

// prototype 은 공유 또는 위임(링크 참조 객체(prototype)을 바라봄) 생성자 함수내부는 복사가 이루어진다. 자원관리 측면과 각 개체별 사본이 필요한지 생각해 보자.