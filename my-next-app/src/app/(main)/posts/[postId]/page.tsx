import PostList from '@/components/blocks/PostList';

export default async function PostDetailPage() {
	console.log('PostLiistPage 렌더링!');
	return (
		<div>
			<PostList />
		</div>
	);
}
