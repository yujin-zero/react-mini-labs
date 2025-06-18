// src/app/(main)/server-albums/[pageId]/page.tsx

import AlbumDetailClient from '../Album.client';

interface AlbumDetailProps {
	params: Promise<{
		pageId: string;
	}>;
}

export default async function AlbumDetailPage({ params }: AlbumDetailProps) {
	const { pageId } = await params;

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/albums/${pageId}`
	);
	const data = await res.json();

	return <AlbumDetailClient title={data.title} />;
}
