import { useEffect, useState } from "react";

export default function MyToggleButton() {
  const [text, setText] = useState("ON");

  // useState 사용 이유
  // 컴포넌트 함수가 호출되면 ui를 리턴한다.
  // ui에 사용되는 변수가 변경되면 ui를 다시 그릴 필요가 있다. (= 컴포넌트 함수를 다시 호출해야 한다.)
  //특정 변수가 변경되면 해당 컴포넌트 함수르 다시 실행할 수 있도록 도와주는 hook ==> const [state, setState] = useState()

  useEffect(() => {
    console.log(`Toggle is ${text}`);
  }, [text]);

  const changeText = () => {
    setText(text === "ON" ? "OFF" : "ON");
  };

  return <button onClick={changeText}>{text}</button>;
}
