// [요구사항]
// 다음 문자열 배열에서 'stop' 문자를 만났을 때 반복을 중지하고, 'skip' 문자를 만났을 때 해당 반복을 건너뛰고 나머지 문자열들을 출력하세요.

// [코드]
let words = ['apple', 'banana', 'skip', 'cherry', 'stop', 'date', 'elephant'];
// 여기에 코드를 작성하세요.

for (i = 0; i < words.length; i++) {
    if (words[i] === 'skip') {
        continue;
    }
    if (words[i] === 'stop') {
        break;
    }
    console.log(words[i]);
};



// [테스트]
// 출력: apple, banana, cherry