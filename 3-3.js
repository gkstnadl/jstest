// [요구사항]
// 아래의 객체에서 name과 age 속성을 구조분해할당을 사용하여 각각의 변수에 저장하세요.

// [코드]
let person = { name: "Alice", age: 25, job: "Engineer" };
// 여기에 코드를 작성하세요.

// [테스트]
// name 변수의 값이 "Alice"이고, age 변수의 값이 25인지 확인하세요.

let {name, age} = person; 

console.log(name);
console.log(age);