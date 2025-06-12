export default function LazyComonentTwo() {
  console.log("LazyComponentTwo 로드 및 렌더링");
  return (
    <div
      style={{
        border: "2px solid lightseagreen",
        backgroundColor: "#f0fff0",
      }}>
      <h2>LazyComonentTwo</h2>
      <button onClick={() => alert("기능 활성화!")}>클릭!</button>
    </div>
  );
}
