// src/app/(main)/albums/page.tsx

interface Album {
	userId: number;
	id: number;
	title: string;
}

export default async function AlbumsPage() {
	const res = await fetch('https://jsonplaceholder.typicode.com/albums');
	const data = await res.json();
	// console.log(data);
	// console.log(data.length);

	return (
		<div>
			<h1>Album 리스트</h1>
			<ul>
				{data.map((item: Album) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</div>
	);
}
