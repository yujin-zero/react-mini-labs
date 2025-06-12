export default function LazyComponentOne() {
  console.log("LazyComponentOne 로드 및 렌더링");
  return (
    <div
      style={{
        border: "2px solid lightcoral",
        backgroundColor: "#fff5f5",
      }}>
      <h2>LazyComonentOne</h2>
      <ul>
        {Array.from({ length: 5 }).map((_, index) => (
          <li key={index}>무거운 아이템 {index + 1}</li>
        ))}
      </ul>
    </div>
  );
}
