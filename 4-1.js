// [요구사항]
// 아래의 함수를 async/await를 사용하여 비동기로 작동하게 만드세요.

// [코드]
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetched!");
//         }, 1000);
//     });
// }

// 여기에 코드를 작성하세요.
async function fetchData() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched!");
            resolve(); // 1초후에 콘솔로그 찍고, resolve 불러서 성공시킴
        }, 1000);
    });
};

fetchData(); // 근데 await 걸어놨으니까 바로 실행안되고 fetchData 함수가 호출되면 실행되게끔.


// [테스트]
// fetchData 함수를 호출하여 "Data fetched!" 문자열이 정상적으로 반환되는지 확인하세요.

