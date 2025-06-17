// src/components/blocks/PostItem.PostItem.client.tsx
'use client';

import { useParams } from 'next/navigation';

interface PostItemClientProps {
	postId: string;
}

export default function PostItemClient({ postId }: PostItemClientProps) {
	// const params = useParams();

	// console.log("클라이언트에서 "params);

	return (
		<div className="container mx-auto text-center p-5">
			<p>postId(ServerComponent에서 받아온 postId): {postId} </p>
		</div>
	);
}
