import { useContext } from "react";
import TodoContext from "./TodoContext";

export default function Colorbar({ changeColor }) {
  const { setInputColor } = useContext(TodoContext);

  return (
    <>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#3674B5",
          width: "30px",
          height: "30px",
        }}
        onClick={() => setInputColor("#3674B5")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#578FCA",
          width: "30px",
          height: "30px",
        }}
        onClick={() => setInputColor("#578FCA")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#A1E3F9",
          width: "30px",
          height: "30px",
        }}
        onClick={() => setInputColor("#A1E3F9")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "white",
          width: "30px",
          height: "30px",
        }}
        onClick={() => setInputColor("white")}></button>
    </>
  );
}
