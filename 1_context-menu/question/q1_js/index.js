// Write Javascript code here!
/*
세가지 케이스가 있다.
1. 초기상태에서 메뉴 클릭
2. 컨텍스트가 open된 메뉴 클릭
3. 컨텍스트가 open된 메뉴 이외의 메뉴 클릭
1의 경우 item 에 open 클래스 add하면된다.
2의 경우를 처리하기 위해 add대신 toggle사용
3을 처리하기 위해서는 기존에 open된 다른 메뉴를 닫아 줘야한다. 
3-1. e.target이 open 클래스를 가지고 있으면 toggle처리로 넘어가면 된다.
3-2. e.target이 open 클래스가 없다면 item nodeList의 open클래스를 제거한다.
*/

$wrapper = document.querySelector(".wrapper");

const removeAllClass = (iterable, className) => {
  [...iterable].forEach((node) => {
    if (node.classList.contains(className)) node.classList.remove(className);
  });
};
//event handler
$wrapper.onclick = (e) => {
  if (!e.target.matches(".item")) return;
  if (!e.target.classList.contains("open"))
    removeAllClass(e.currentTarget.children, "open");
  e.target.classList.toggle("open");
};
