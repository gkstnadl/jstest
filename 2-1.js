// [요구사항]
// 다음 배열에서 5보다 큰 숫자만 출력하세요. 그러나 8을 만났을 때 반복문을 종료하세요.

// [코드]
let numbers = [2, 4, 6, 8, 10, 12];
// 여기에 코드를 작성하세요.
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 8) {
        break;
    }
    if (numbers[i] >5) {
        console.log(numbers[i]);
    }
};



// [테스트]
// 출력: 6