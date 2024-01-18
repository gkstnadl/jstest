

// [요구사항]
// 주어진 숫자 배열의 모든 요소를 더하는 함수 sumArray를 작성하세요.

// [코드]
function sumArray(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
};

console.log(sumArray([1,2,3,4,5]));

// [테스트]
// sumArray([1, 2, 3, 4, 5])은 15를 반환해야 합니다.