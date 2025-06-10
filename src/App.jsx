import TodoAppComponent from "./components/todo/Todo-App-Component";
import { TodoProvider } from "./components/todo/TodoProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <TodoProvider>
        <TodoAppComponent />
      </TodoProvider>
    </div>
  );
}

export default App;
