type Sample = {
  postId: string;
};

export interface PostDetailPageProps {
  params: Promise<{
    postId: string;
  }>;
}

async function PostDetailPage({ params }: PostDetailPageProps) {
  const data = await params;

  return <div>PostDetailPage</div>;
}
