/*
⇒ useTodo라는 hook을 만들어서 Component 내부에서 사용. 
   (useTodo: {todoList, addTodo, removeTodo, editTodo})
   {contents, addContent, deleteContent, modifyContent}
→ ContextAPI사용하기
*/

import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

export function TodoProvider({ children }) {
  const [contents, setContents] = useState([]);
  const [input, setInput] = useState("");
  const [inputColor, setInputColor] = useState("white");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("todo-contents");
    if (stored) {
      setContents(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-contents", JSON.stringify(contents));
  }, [contents]);

  // const changeColor = (color) => {
  //   setInputColor(color);
  // };

  const search = contents.filter((item) => item.content.includes(keyword));

  const addContent = () => {
    const newTodo = {
      content: input,
      color: inputColor,
      id: Date.now(),
    };
    setContents([...contents, newTodo]);
    setInput("");
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

  return (
    <TodoContext.Provider
      value={{
        input,
        setInput,
        inputColor,
        setInputColor,
        contents,
        addContent,
        deleteContent,
        modifyContent,
        // changeColor,
        search,
        keyword,
        setKeyword,
      }}>
      {children}
    </TodoContext.Provider>
  );
}
