// src/app/(main)/server-albums/[pageId]/page.tsx

interface AlbumDetailProps {
	params: Promise<{
		pageId: string;
	}>;
}

export default async function AlbumDetailPate({ params }: AlbumDetailProps) {
	const { pageId } = await params;
	console.log(pageId);

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/albums/${pageId}`
	);
	const data = await res.json();

	return (
		<div>
			<h1>Album 상세 리스트</h1>
			<ul>
				<li>{data.title}</li>
			</ul>
		</div>
	);
}
