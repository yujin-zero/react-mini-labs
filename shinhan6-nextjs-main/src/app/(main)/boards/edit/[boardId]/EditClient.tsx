"use client";

import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

type BoardEditClientProps = {
  boardId: string;
  title: string;
  content: string;
};

export default function BoardEditClient({
  boardId,
  title,
  content,
}: BoardEditClientProps) {
  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");
  const router = useRouter();

  const editBoard = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:4001/board/${boardId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle, content: newContent }),
    });

    if (response.ok) {
      router.push(`/boards/${boardId}`);
    }
  };

  useEffect(() => {
    setTitle(title);
    setContent(content);
  }, []);

  return (
    <Container className="pt-5">
      <h2 className="mb-4">게시글 수정</h2>
      <Form onSubmit={editBoard}>
        <Form.Control
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}></Form.Control>
        <Form.Control
          as="textarea"
          rows={10}
          value={newContent}
          onChange={(e) => setContent(e.target.value)}></Form.Control>
        <Button type="submit">게시글 수정</Button>
      </Form>
    </Container>
  );
}
