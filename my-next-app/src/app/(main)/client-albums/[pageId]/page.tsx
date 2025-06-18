// src/app/(main)/client-albums/[pageId]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Album {
	userId: number;
	id: number;
	title: string;
}

export default function AlbumsDetailPage() {
	const [albums, setAlbums] = useState<Album>();
	const params = useParams<{
		pageId: string;
	}>();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums/${params.pageId}`)
			.then((res) => res.json())
			.then((data) => setAlbums(data));
	}, [params.pageId]);

	return (
		<div>
			<h1>Album 리스트 - client</h1>
			{albums?.title}
		</div>
	);
}
