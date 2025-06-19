import type { Post } from "@/types/api/post";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await res.json();
}

export async function fetchPost(postId: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}
