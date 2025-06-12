import * as React from "react";
import { Suspense, useState } from "react";

const LazyComponentOne = React.lazy(() => import("./LazyComponentOne"));
const LazyComponentTwo = React.lazy(() => import("./LazyComponentTwo"));

export default function LazyExample() {
  const [showLazy1, setShowLazy1] = useState(false);
  const [showLazy2, setShowLazy2] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div>
        <p>
          아래 버튼을 클릭하면 해당 컴포넌트의 코드를 지연 로딩하여 화면에
          보여줍니다.
        </p>
        <button onClick={() => setShowLazy1((prev) => !prev)}>
          {showLazy1 ? "Lazy1 숨기기" : "Lazy1 보기"}
        </button>
        <button onClick={() => setShowLazy2((prev) => !prev)}>
          {showLazy2 ? "Lazy2 숨기기" : "Lazy2 보기"}
        </button>
      </div>

      <div>
        {/* Suspense 컴포넌트는 지연 로딩되는 컴포넌트가 로드될 때까지 fallback UI를 보여줌. */}
        <Suspense fallback={<div>Loading중입니다...</div>}>
          {showLazy1 && <LazyComponentOne />}
          {showLazy2 && <LazyComponentTwo />}
          {!showLazy1 && !showLazy2 && (
            <p style={{ color: "gray" }}>표시할 기능이 선택되지 않았습니다.</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
