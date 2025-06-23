"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function MyNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <Navbar expand="lg" className="bg-light px-3" fixed="top">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link href="/" className="fw-bold me-3 nav-link">
            프로젝트
          </Link>

          <div className="d-none d-sm-flex flex-row gap-2">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/portfolio" className="nav-link">
              포트폴리오
            </Link>
            <Link href="/posts" className="nav-link">
              Posts
            </Link>
            <Link href="/boards" className="nav-link">
              게시글
            </Link>
          </div>
        </div>

        <div>
          <Navbar.Toggle aria-controls="right-navbar-collapse" />
          <Navbar.Collapse
            id="right-navbar-collapse"
            className="justify-content-end">
            <Nav>
              {isLoggedIn ? (
                <Button variant="outline-danger" onClick={handleLogout}>
                  로그아웃
                </Button>
              ) : (
                <>
                  <Link href="/login" className="nav-link">
                    로그인
                  </Link>
                  <Link href="/signup" className="nav-link">
                    회원가입
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}
