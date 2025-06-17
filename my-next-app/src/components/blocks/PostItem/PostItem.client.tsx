// src/components/blocks/PostItem.PostItem.client.tsx
'use client';

import { fetchPost } from '@/services/post-service';
import type { Post } from '@/types/api/post';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PostItemClientProps {
	postId: string;
}

export default function PostItemClient({ postId }: PostItemClientProps) {
	const params = useParams<{
		postId: string;
	}>();
	const [board, setBoard] = useState<Post | null>(null);

	useEffect(() => {
		fetchPost(params.postId).then((data) => {
			setBoard(data);
		});
	}, [params.postId]);

	// console.log("클라이언트에서 "params);

	return (
		<div className="container mx-auto text-center p-5">
			<p>{board && board.title}</p>
			<p>postId(ServerComponent에서 받아온 postId): {postId} </p>
			<p>postId(클라이언트에서 받아온 postId): {params.postId} </p>
		</div>
	);
}
