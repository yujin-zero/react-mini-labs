import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function TodoInput() {
  const { input, setInput, addContent, inputColor } = useContext(TodoContext);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ backgroundColor: inputColor }}
      />
      <button onClick={addContent}>입력</button>
    </>
  );
}
