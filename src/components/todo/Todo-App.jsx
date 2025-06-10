import { useEffect, useState } from "react";

export default function TodoApp() {
  const [input, setInput] = useState();
  const [contents, setContents] = useState([]);
  const [inputColor, setInputColor] = useState("white");

  const addContent = () => {
    setContents([...contents, { content: input, color: inputColor }]);
  };

  const changeColor = (color) => {
    setInputColor(color);
    console.log(inputColor);
  };

  return (
    <div
      style={{ textAlign: "center", background: "blue", minHeight: "100vh" }}>
      <h1>Todo-App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ backgroundColor: inputColor }}
      />
      <button onClick={addContent}>입력</button>
      <br />
      <br />
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "white",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("white")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "red",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("red")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "yellow",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("yellow")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "pink",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("pink")}></button>
      <br />
      <br />
      <br />
      <h2>Todo Items</h2>
      <br />
      {contents.map(({ content, color }, index) => {
        return (
          <div
            style={{
              backgroundColor: color,
              height: "30px",
              marginLeft: "20%",
              marginRight: "20%",
              marginBottom: "10px",
              lineHeight: "30px",
            }}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
