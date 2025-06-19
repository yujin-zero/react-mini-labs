import AlbumItem from "@/components/blocks/AlbumItem";

type AlbumDetailPageProps = {
  params: Promise<{
    albumId: string;
  }>;
};

export default async function AlbumDetailPage({
  params,
}: AlbumDetailPageProps) {
  const { albumId } = await params;

  return <AlbumItem albumId={albumId} />;
}
