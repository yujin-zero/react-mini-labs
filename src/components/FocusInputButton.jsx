import React, { useRef } from "react";

export default function FocusInputButton() {
  const inputRef = useRef();

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus(); // 위치 이동
  };

  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 2000 }}></div>
      <input ref={inputRef} type="text" /> {/* HTML DOM요소 담기 */}
      <div style={{ height: 2000 }}></div>
    </div>
  );
}
