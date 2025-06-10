export default function TodoItem({
  color,
  content,
  deleteContent,
  modifyContent,
  id,
}) {
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          height: "30px",
          marginLeft: "20%",
          marginRight: "20%",
          marginBottom: "10px",
          position: "relative",
        }}>
        {content}
        <button
          onClick={() => modifyContent(id)}
          style={{
            height: "24px",
            position: "absolute",
            top: "3px",
            right: "57px",
          }}>
          수정
        </button>
        <button
          onClick={() => deleteContent(id)}
          style={{
            height: "24px",
            position: "absolute",
            right: "10px",
            top: "3px",
          }}>
          삭제
        </button>
      </div>
    </>
  );
}
