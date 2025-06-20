import BoardEditClient from "./EditClient";

type BoardEditPageProps = {
  params: Promise<{
    boardId: string;
  }>;
};

export default async function BoardEditPage({ params }: BoardEditPageProps) {
  const { boardId } = await params;
  console.log("수정해유");

  const resp = await fetch(`http://localhost:4001/board/${boardId}`);
  const board = await resp.json();

  return (
    <BoardEditClient
      boardId={boardId}
      title={board.title}
      content={board.content}
    />
  );
}
