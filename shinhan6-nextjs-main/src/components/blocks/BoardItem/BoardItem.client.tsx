"use client";

import { useEffect, useState } from "react";
import { Container, Button, Form, Row, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

type Board = {
  _id: string;
  title: string;
  content: string;
};

type BoardItemClientProps = {
  board: Board;
};

type Comment = {
  _id: string;
  boardId: string;
  content: string;
};

export default function BoardItemClient({ board }: BoardItemClientProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");

  const deleteBoard = () => {
    fetch(`http://localhost:4001/board/${board._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    router.push("/boards");
  };

  useEffect(() => {
    setTitle(board.title);
    setContent(board.content);
  }, []);

  useEffect(() => {
    fetch("http://localhost:4001/comment/")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (comment: { boardId: string }) => comment.boardId === board._id
        );
        setComments(filtered);
      });
  }, []);

  const postComment = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("댓글등록");

    const response = await fetch("http://localhost:4001/comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ boardId: board._id, content: text }),
    });

    if (response.ok) {
      const newComment = await response.json();
      setComments((prev) => [...prev, newComment]);
      setText("");
    }
  };

  return (
    <Container className="pt-5">
      <h2 className="mb-4">게시글 조회</h2>
      <Form>
        <div className="d-flex justify-content-end mb-3">
          <Button variant="outline-warning" href={`/boards/edit/${board._id}`}>
            수정
          </Button>
          <Button variant="outline-danger" onClick={deleteBoard}>
            삭제
          </Button>
        </div>
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

      <h3 className="mt-4">댓글</h3>

      {comments.map((comment) => (
        <Row key={comment._id} className="g-3">
          <Card className="border rounded-3 h-100">
            <Card.Body>
              <Card.Title className="mb-2 fw-semibold">
                {comment.content}
              </Card.Title>
            </Card.Body>
          </Card>
        </Row>
      ))}
      <Form onSubmit={postComment} className="mt-5">
        <Form.Label>댓글 작성</Form.Label>
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}></Form.Control>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-info" type="submit">
            댓글 등록
          </Button>
        </div>
      </Form>
    </Container>
  );
}
