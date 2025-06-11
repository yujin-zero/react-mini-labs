import { useEffect, useState } from "react";
import "./BoardApp.css";

function BoardApp() {
  const [posts, setPosts] = useState([]);

  // API 가져오든가 말든가
  // body, id, title, userId
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setPosts(data);
      });
  }, []);

  // 삭제하지마ㅠ
  const removeContent = (id) => {
    console.log("걍 지워");
    console.log(id);

    setPosts(posts.filter((item) => item.id !== id));
  };

  return (
    <div className="root">
      <h1>Board App</h1>
      <table className="board-table">
        <tbody>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>작성자 번호</th>
            <th>수정할래?</th>
            <th>삭제할래?</th>
          </tr>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
                <td>
                  <button>수정</button>
                </td>
                <td>
                  <button onClick={() => removeContent(post.id)}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardApp;
