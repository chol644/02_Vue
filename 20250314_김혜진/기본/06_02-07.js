// 배열의 구조 분해 - 배열, 객체 값 추출하여 한번에 여러 변수에 할당
let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;
console.log(a1, a2, a3);

let p1 = { name: '홍길동 ', age: 20, gender: 'M' };
let { name: n, age: a, gender: g } = p1;
console.log(n, a, g);
