const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);

arr2[0] = 100;
console.log('변경 후');
console.log('arr1: ', arr1);
console.log('arr2: ', arr2); //100,2,3
// -> 얕은 복사 : 주소만 복사

// 깊은 복사 : 실제 데이터를 복사(복제)
const arr3 = [100, 200, 300];
const arr4 = [...arr3]; //...<- 전개 연산자
// [...[100,200,300]] -> [100,200,300]

arr4[0] = 1;
console.log('arr3: ', arr3);
console.log('arr4: ', arr4);
