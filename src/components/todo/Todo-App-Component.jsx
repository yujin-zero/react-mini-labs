import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import Search from "./Search";

export default function TodoAppComponent() {
  const [input, setInput] = useState("");
  const [contents, setContents] = useState([]);
  const [inputColor, setInputColor] = useState("white");
  const [keyword, setKeyword] = useState("");

  const addContent = () => {
    const newTodo = {
      content: input,
      color: inputColor,
      id: Date.now(),
    };
    setContents([...contents, newTodo]);
    setInput("");
  };

  const changeColor = (color) => {
    setInputColor(color);
  };

  const deleteContent = (id) => {
    setContents(contents.filter((item) => item.id !== id));
  };

  const modifyContent = (id) => {
    console.log(contents);
    const text = prompt("텍스트 입력");
    const updated = contents.map((item) =>
      item.id === id ? { ...item, content: text } : item
    );
    setContents(updated);
  };

  const search = contents.filter((item) => item.content.includes(keyword));

  useEffect(() => {
    const stored = localStorage.getItem("todo-contents");
    if (stored) {
      setContents(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-contents", JSON.stringify(contents));
  }, [contents]);

  return (
    <div
      style={{
        textAlign: "center",
        background: "#D1F8EF",
        minHeight: "100vh",
        width: "100%",
      }}>
      <h1>Todo-App</h1>
      <TodoInput
        input={input}
        setInput={setInput}
        addContent={addContent}
        inputColor={inputColor}
      />
      <br />
      <br />
      <Colorbar changeColor={changeColor} />
      <br />
      <br />
      <br />
      <h2>Todo Items</h2>
      <br />
      <TodoList
        contents={contents}
        deleteContent={deleteContent}
        modifyContent={modifyContent}
      />
      <br />
      <br />
      <Search keyword={keyword} setKeyword={setKeyword} search={search} />
    </div>
  );
}
