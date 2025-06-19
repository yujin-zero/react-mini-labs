"use client";

import { useEffect, useState } from "react";

type Board = {
  _id: string;
  title: string;
  content: string;
};

export default function BoardsPage() {
  const [boardList, setBoardList] = useState<Board[]>([]);

  useEffect(() => {
    fetch("http://localhost:4001/board/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBoardList(data);
      });
  }, []);

  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {boardList.map((board) => {
          return <li key={board._id}>{board.title}</li>;
        })}
      </ul>
    </div>
  );
}
