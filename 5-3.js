// [요구사항]
// 아래의 HTML 요소에서 class가 "highlight"인 모든 요소의 텍스트색을 빨간색으로 변경하세요.

// [HTML]
/*
<div class="content">
    <p class="highlight">Change my color!</p>
    <p>Don't change my color.</p>
    <p class="highlight">Change my color too!</p>
</div>
*/

// [코드]
// 여기에 코드를 작성하세요.
const highcolor = document.querySelectorAll('.highlight');

highcolor.forEach(highs => {
    highs.style.color = 'red';
}); // 그냥 highcolor.style.color 하니까 적용이 안됨. 하나하나 요소에다 설정해주는 느낌으로 


// [테스트]
// 웹 페이지에서 class "highlight"를 가진 모든 요소의 텍스트색이 빨간색인지 확인하세요.