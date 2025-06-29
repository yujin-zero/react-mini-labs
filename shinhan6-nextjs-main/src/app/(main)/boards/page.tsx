"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";

type Board = {
  _id: string;
  title: string;
  content: string;
};

export default function BoardsPage() {
  const [boardList, setBoardList] = useState<Board[]>([]);

  useEffect(() => {
    fetch("http://localhost:4001/board/")
      .then((res) => res.json())
      .then((data) => setBoardList(data));
  }, []);

  return (
    <Container className="pt-5">
      <h2 className="fw-bold mb-4 text-center">게시글 목록</h2>

      <div className="d-flex justify-content-end mb-3">
        <Link href="/boards/write">
          <Button variant="outline-primary">게시글 작성</Button>
        </Link>
      </div>

      <Row className="g-3">
        {boardList.map((board) => (
          <Col key={board._id} xs={12} md={6}>
            <Link
              href={`/boards/${board._id}`}
              key={board._id}
              className="text-decoration-none">
              <Card className="border rounded-3 h-100">
                <Card.Body>
                  <Card.Title className="mb-2 fw-semibold">
                    {board.title}
                  </Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "0.95rem" }}>
                    {board.content.length > 120
                      ? board.content.slice(0, 120) + "..."
                      : board.content}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
