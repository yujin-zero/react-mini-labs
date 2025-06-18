// src/app/(main)/client-albums/page.tsx
'use client';

import { useEffect, useState } from 'react';

interface Album {
	userId: number;
	id: number;
	title: string;
}

export default function AlbumsPage() {
	const [albums, setAlbums] = useState<Album[]>([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/albums')
			.then((res) => res.json())
			.then((data) => setAlbums(data));
	}, []);

	return (
		<div>
			<h1>Album 리스트</h1>
			<ul>
				{albums.map((item: Album) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
}
