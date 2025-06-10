import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function Search() {
  const { keyword, setKeyword, search } = useContext(TodoContext);
  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul>
        {search.map(({ content, color }, index) => (
          <li style={{ listStyleType: "none" }}>{content}</li>
        ))}
      </ul>
    </>
  );
}
