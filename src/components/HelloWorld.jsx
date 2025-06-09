/**
 * [jsx 문법 내에서 javascript코드 사용법: 중괄호 {} 사용]
 *
 * [CSS 적용방법 기초]
 * 1. inline-style로 적용하기 (style 속성)
 *        -> js 객체로 전달해야 함
 *        -> 하이픈으로 연결된 것들은 CamelCase로 작성해야 합니다.
 *        -> eg.) background-color => backgroundColor
 * 2. className으로 적용하기 (className 속성)
 *        -> css를 정의한다
 *        -> jsx에서 css를 import한다
 *        -> className 속성에 명시한다. (js코드이기 때문에, class 키워드 사용불가)
 */

import "./HelloWorld.css";

export default function HelloWorld() {
  const name = "유진";
  return (
    <div className="root">
      {/* <div className="box">박스</div> */}
      {/* <div style={{ backgroundColor: "red", marginLeft: 30 }}>{name}</div> */}
      <h1>Hello, World!</h1>
      <p>This is my First component</p>
    </div>
  );
}
