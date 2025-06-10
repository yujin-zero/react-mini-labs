/*
⇒ useTodo라는 hook을 만들어서 Component 내부에서 사용. 
   (useTodo: {todoList, addTodo, removeTodo, editTodo})
   {contents, addContent, deleteContent, modifyContent}
→ ContextAPI사용하기
*/

import { createContext } from "react";

const TodoContext = createContext();
export default TodoContext;
