"use client";

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const postBoard = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(title);
    console.log(content);
    console.log("제출하셈");

    const response = await fetch("http://localhost:4001/board/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      console.log("등록함. 확인해보셈");
    }
  };

  return (
    <Container className="pt-5">
      <h2 className="mb-4">게시글 작성</h2>
      <Form onSubmit={postBoard}>
        <Form.Group>
          <Form.Label>제목</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-info" type="submit">
            게시글 작성
          </Button>
        </div>
      </Form>
    </Container>
  );
}
