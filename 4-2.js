// [요구사항]
// 아래의 함수에서 then, catch, finally를 사용하여 비동기 처리를 하고,
// 성공적으로 데이터를 가져오면 "Data: [데이터]", 에러가 발생하면 "Error: [에러 메시지]",
// 그리고 작업이 끝났을 때 "Process completed"를 출력하세요.

// [코드]
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Network Error");
        }, 1000);
    });
}

// 여기에 코드를 작성하세요.

fetchDataWithError()
    .then(data => {
        // 성공하면
        console.log("Data:", data);
    })
    .catch(error => {
        // 에러 처리
        console.log("Error:", error);
    })
    .finally(() => {
        // 완료 후 항상 실행되는거. 완료됐다고 알림뜨게 하기
        console.log("Process completed");
    });

// [테스트]
// fetchDataWithError 함수를 호출하여 적절한 메시지들이 출력되는지 확인하세요.

