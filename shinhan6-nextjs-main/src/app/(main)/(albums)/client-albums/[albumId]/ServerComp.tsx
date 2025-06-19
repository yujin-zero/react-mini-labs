// "이 파일은 반드시 서버에서만 동작해야 해." 라고 명시
// import "server-only";

// 이건 단순 예를 위한 파일입니다.

export default function ServerComp() {
  console.log("server-comp");

  return <div>서버 컴포넌트</div>;
}
