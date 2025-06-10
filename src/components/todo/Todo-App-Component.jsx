import TodoInput from "./TodoInput";
import Colorbar from "./Colorbar";
import TodoList from "./TodoList";
import Search from "./Search";

export default function TodoAppComponent() {
  return (
    <div
      style={{
        textAlign: "center",
        background: "#D1F8EF",
        minHeight: "100vh",
        width: "100%",
      }}>
      <br />
      <br />
      <br />
      <h1>Todo-App</h1>
      <TodoInput />
      <br />
      <br />
      <Colorbar />
      <br />
      <br />
      <br />
      <h2>Todo Items</h2>
      <br />
      <TodoList />
      <br />
      <br />
      <Search />
    </div>
  );
}
