import { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  const startTimer = () => {
    setFlag(true);
  };

  const stopTimer = () => {
    setFlag(false);
  };

  const resetTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      //   setTime(time + 1);
      //   setTime함수 인자를 2종류
      // 1. setTime(valu
      // 2. setTime(function) ==< function: (이전state)=> new State
      //   setTime(time + 1);
      if (flag) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [flag]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>{time}</h3>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
