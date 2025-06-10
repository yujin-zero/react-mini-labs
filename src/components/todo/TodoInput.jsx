export default function TodoInput({ input, setInput, addContent, inputColor }) {
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ backgroundColor: inputColor }}
      />
      <button onClick={addContent}>입력</button>
    </>
  );
}
