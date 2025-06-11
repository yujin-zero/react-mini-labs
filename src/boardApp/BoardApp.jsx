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

  return (
    <div className="root">
      <h1>Board App</h1>
      <table className="board-table">
        <tbody>
          <tr>
            <th>글 번호</th>
            <th>제목</th>
            <th>작성자 번호</th>
          </tr>
          {posts.map((post) => {
            return (
              <tr>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BoardApp;
