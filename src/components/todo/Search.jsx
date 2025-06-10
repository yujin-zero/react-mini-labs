export default function Search({ keyword, setKeyword, search }) {
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
