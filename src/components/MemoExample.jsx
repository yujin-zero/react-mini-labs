import { useState } from "react";
import { MemoizedGreeter, RegularGreeter } from "./RegularGreeter";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Alice");
  console.log("ParentComponent is rendering!");
  return (
    <div>
      <p>
        아래 버튼을 클릭하면 ParentComponent의 'count' 상태가 변경됩니다. <br />
        콘솔 로그를 확인하여 각 Greeter 컴포넌트가 언제 리렌더링되는지
        관찰하세요.
      </p>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment Count: {count}
      </button>
      <button
        onClick={() => setUser(user === "Alice" ? "Bob" : "Alice")}
        style={{ marginLeft: "10px" }}>
        Change User (for MemoizedGreeter): {user}
      </button>
      <h3>일반 자식 컴포넌트:</h3>
      <RegularGreeter name="Guest" />
      <h3>React.memo 사용 자식 컴포넌트</h3>
      <MemoizedGreeter name={user} />
    </div>
  );
}
