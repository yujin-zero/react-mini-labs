import { useState } from "react";

export default function ForbidFilter() {
  const [forbids, setForbids] = useState(["금지어1", "금지어2", "금지어3"]);
  const [newForbid, setNewForbid] = useState("");
  const [input, setInput] = useState("");
  const [warnSentences, setWarnSentences] = useState([]);

  const addForbid = () => {
    setForbids([...forbids, newForbid]);
  };

  const filter = () => {
    for (let i = 0; i < forbids.length; i++) {
      if (input.includes(forbids[i])) {
        console.log("금지어 발견");

        const filterSentence = input.replace(forbids[i], "**");

        setWarnSentences([...warnSentences, filterSentence]);

        break;
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="left">
        <label>사용자 입력</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={filter}>추가</button>
        <br />
        <br />
        <ul>
          {warnSentences.map((warn, index) => (
            <li>{warn}</li>
          ))}
        </ul>
      </div>
      <div className="right">
        <label>금지어 입력</label>
        <input
          type="text"
          value={newForbid}
          onChange={(e) => setNewForbid(e.target.value)}
        />
        <button onClick={addForbid}>추가</button>
        <br />
        <br />
        <ul>
          {forbids.map((word, index) => (
            <li>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
