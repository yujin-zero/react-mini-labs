"use client";

import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const signup = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4001/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("회원가입 완료");
      router.push("/");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}>
      <Card style={{ width: "100%", maxWidth: "400px" }} className="shadow p-4">
        <Card.Body>
          <h2 className="mb-4 text-center fw-bold">회원가입</h2>
          <Form onSubmit={signup}>
            <Form.Group className="mb-3">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="이메일을 입력하세요"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="비밀번호를 입력하세요"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="info" type="submit">
                회원가입
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
