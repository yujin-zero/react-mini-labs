import BoardItem from "@/components/blocks/BoardItem";

type BoardDetailPageProps = {
  params: Promise<{
    boardId: string;
  }>;
};

export default async function BoardDetailPage({
  params,
}: BoardDetailPageProps) {
  const { boardId } = await params;

  return <BoardItem boardId={boardId} />;
}
