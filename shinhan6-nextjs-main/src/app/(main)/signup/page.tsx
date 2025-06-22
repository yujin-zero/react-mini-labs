"use client";

import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
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
    <Container className="pt-5">
      <h2 className="mb-4">회원가입</h2>
      <Form onSubmit={signup}>
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
            회원가입
          </Button>
        </div>
      </Form>
    </Container>
  );
}
