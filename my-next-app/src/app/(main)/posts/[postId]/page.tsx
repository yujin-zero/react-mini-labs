import PostList from '@/components/blocks/PostList';

export interface PostDetailProps {
	params: Promise<{
		postId: string;
	}>;
}

export default async function PostDetailPage({ params }: PostDetailProps) {
	const { postId } = await params;
	console.log(postId);
	return (
		<div>
			<PostList />
		</div>
	);
}
