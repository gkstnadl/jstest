// [요구사항]
// 아래의 HTML 요소 중 "myList"에 새로운 항목 "Mango"를 추가하세요.

// [HTML]
/*
<ul id="myList">
    <li>Apple</li>
    <li>Banana</li>
</ul>
*/

// [코드]
// 여기에 코드를 작성하세요.

const list = document.getElementById('myList'); // myList

const newList = document.createElement('li'); // li태그 만드는 변수

newList.textContent = 'Mango'; // li태그 만든 변수에 Mango 텍스트 넣기

list.appendChild(newList); 
// id가 mylist였던거 (=list)에 newList자식추가 


// [테스트]
// 웹 페이지에서 "myList"에 "Mango" 항목이 추가되었는지 확인하세요.