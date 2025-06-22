"use client";

import { useEffect, useState } from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
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
    </Container>
  );
}
