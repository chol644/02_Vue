function addContact(
  name,
  mobile,
  home = '없음', //매개변수가 생략된 경우 기본값 '없음' 으로 설정
  address = '없음',
  email = '없음'
) {
  let str =
    `name=${name}, mobile=${mobile}, home=${home},` +
    ` address=${address}, email=${email}`;
  console.log(str);
}
addContact('홍길동 ', '010 222 3331');
addContact('이몽룡 ', '010 222 3331', '02 3422 9900', ' 서울시');
