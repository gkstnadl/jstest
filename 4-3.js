// [요구사항]
// 아래의 async/await 함수를 then ~ catch로 변환하세요.

// [코드]
async function getData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

// 여기에 코드를 작성하세요.

function getData2() {
    return fetch('https://api.example.com/data') 
        .then(response => response.json()) 
        .then(data => data) 
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}

console.log(getData());
console.log(getData2());

// fetch가 뭔가 오류나서 잘 확인이 안됩니다 ㅠ

// [테스트]
// 변환된 함수를 호출하여 동일하게 데이터를 반환하는지 확인하세요.

