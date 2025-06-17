// src/app/(main)/posts/[postId]/page.tsx
// import PostList from '@/components/blocks/PostList';

import PostItem from '@/components/blocks/PostItem/PostItem';
import { fetchPost } from '@/services/post-service';

export interface PostDetailProps {
	params: Promise<{
		postId: string;
	}>;
}

export default async function PostDetailPage({ params }: PostDetailProps) {
	const { postId } = await params;
	console.log(postId);

	const post = await fetchPost(postId);
	return (
		<div className="container mx-auto text-center p-8">
			<h1 className="text-3xl font-bold underline">게시글 상세 페이지</h1>
			<p className="mt-4 text-lg">여기는 게시글 상세 페이지입니다.</p>
			<p>{post.title}</p>
			<div>
				<PostItem postId={postId}></PostItem>
			</div>
		</div>
	);
}
