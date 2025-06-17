'use client';

interface PostItemClientProps {
	postId: string;
}

export default function PostItemClient({ postId }: PostItemClientProps) {
	return (
		<div className="container mx-auto text-center p-5">
			<p>postId(ServerComponent에서 받아온 postId): {postId} </p>
		</div>
	);
}
