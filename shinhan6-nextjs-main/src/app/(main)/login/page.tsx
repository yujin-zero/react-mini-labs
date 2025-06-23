"use client";

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log("로그인 완료");
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      console.log("로그인 실패");
    }
  };

  return (
    <Container className="pt-5">
      <h2 className="mb-4">로그인</h2>
      <Form onSubmit={login}>
        <Form.Label>이메일</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}></Form.Control>
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}></Form.Control>
        <div className="d-flex justify-content-end mt-3">
          <Button variant="outline-info" type="submit">
            로그인
          </Button>
        </div>
      </Form>
    </Container>
  );
}
