// [요구사항]
// 아래의 배열을 전개구문을 사용하여 새로운 배열에 복사하세요.

// [코드]
let fruits = ["apple", "banana", "cherry"];
let newFruits;
// 여기에 코드를 작성하세요.
newFruits = [...fruits];

newFruits.push("배"); 

console.log(fruits);
console.log(newFruits);

// [테스트]
// newFruits 배열이 ["apple", "banana", "cherry"]인지 확인하고, 원본 fruits 배열과는 다른 참조를 가지고 있는지 확인하세요.