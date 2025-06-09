import { useEffect, useState } from "react";

export default function Timer() {
  const [input, setInput] = useState(10);
  const [time, setTime] = useState(10);
  const [flag, setFlag] = useState(false);
  const [end, setEnd] = useState(false);
  console.log("렌더링ㅋㅋ");

  const updateTime = () => {
    setTime(input);
    setFlag(true);
    setEnd(false);
  };

  useEffect(() => {
    if (!flag) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const nextTime = prevTime - 1;
        return nextTime >= 0 ? nextTime : 0;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [flag]);

  useEffect(() => {
    if (time <= 0 && !end) {
      setEnd(true);
      setFlag(false);
      setTime(0);
      alert("타이머 종료!");
    }
  }, [time]);

  return (
    <div>
      <label>사용자 입력</label>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={updateTime}>시작</button>
      <h3>{time}</h3>
    </div>
  );
}
