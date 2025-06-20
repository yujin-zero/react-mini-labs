import BoardItemClient from "./BoardItem.client";

export default async function BoardItem({ boardId }: { boardId: string }) {
  const resp = await fetch(`http://localhost:4001/board/${boardId}`);
  const board = await resp.json();
  return <BoardItemClient board={board} />;
}
