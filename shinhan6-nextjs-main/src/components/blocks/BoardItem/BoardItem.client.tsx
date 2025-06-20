"use client";

import { useEffect, useState } from "react";
import { Container, Button, Form } from "react-bootstrap";

type Board = {
  _id: string;
  title: string;
  content: string;
};

type BoardItemClientProps = {
  board: Board;
};

export default function BoardItemClient({ board }: BoardItemClientProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    console.log(board);
    setTitle(board.title);
    setContent(board.content);
  }, []);

  return (
    <Container className="pt-5">
      <h2 className="mb-4">게시글 조회</h2>
      <Form>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          readOnly></Form.Control>
        <Form.Control
          as="textarea"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          readOnly></Form.Control>
      </Form>
    </Container>
  );
}
