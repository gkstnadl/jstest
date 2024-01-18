// [요구사항]
// 문자열 배열을 받아 모든 문자열을 대문자로 변환하고, 새로운 배열로 반환하는 함수 toUpperCaseArray를 작성하세요.

// [코드]
function toUpperCaseArray(strings) {
    return strings.map(string => string.toUpperCase());
};


console.log(toUpperCaseArray(['apple', 'banana']));

// [테스트]
// toUpperCaseArray(['apple', 'banana'])는 ['APPLE', 'BANANA']를 반환해야 합니다.