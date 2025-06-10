import { useContext } from "react";
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { contents, deleteContent, modifyContent } = useContext(TodoContext);

  return (
    <>
      {contents.map(({ content, color, id }, index) => {
        return (
          <TodoItem
            key={id}
            color={color}
            content={content}
            deleteContent={deleteContent}
            modifyContent={modifyContent}
            id={id}
          />
        );
      })}
    </>
  );
}
