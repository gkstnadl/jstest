// [요구사항]
// 버튼을 클릭하면 "Clicked!"라는 텍스트를 alert으로 띄우는 이벤트 리스너를 추가하세요.

// [HTML]
/*
<button id="clickButton">Click me!</button>
*/

// [코드]
// 여기에 코드를 작성하세요.
const clickBtn = document.getElementById('clickButton');

clickBtn.addEventListener('click', () => {
    alert('Clicked!');
});

// 'click', function() { alert('Clicked!') }; 화살표 함수로 바꿔보기


// [테스트]
// 웹 페이지에서 "clickButton" 버튼을 클릭했을 때 "Clicked!"라는 메시지가 alert으로 나타나는지 확인하세요.