import { useEffect, useState } from "react";

export default function DataRendering() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // API로 가져와~~
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUsers(data);
        // console.log(users); // ??
      });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <h1>데이터 통신하여 렌더링하기</h1>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
