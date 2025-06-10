import TodoItem from "./TodoItem";

export default function TodoList({ contents, deleteContent, modifyContent }) {
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
