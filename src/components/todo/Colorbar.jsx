export default function Colorbar({ changeColor }) {
  return (
    <>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#3674B5",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("#3674B5")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#578FCA",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("#578FCA")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "#A1E3F9",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("#A1E3F9")}></button>
      <button
        style={{
          borderRadius: "50%",
          backgroundColor: "white",
          width: "30px",
          height: "30px",
        }}
        onClick={() => changeColor("white")}></button>
    </>
  );
}
