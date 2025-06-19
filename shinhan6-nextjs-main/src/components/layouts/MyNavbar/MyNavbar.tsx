"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyNavbar() {
  const router = useRouter();
  return (
    <div className="bg-blue-200">
      <ul className="flex justify-center gap-4 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {/* <Link href="/portfolio">포트폴리오</Link> */}
          <div
            onClick={() => {
              router.push("/portfolio");
            }}>
            포트폴리오
          </div>
        </li>
        <li>
          <Link href="posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
}
