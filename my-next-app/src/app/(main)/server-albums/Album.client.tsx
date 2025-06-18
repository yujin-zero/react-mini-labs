// src/app/(main)/server-albums/Album.client.tsx
'use client';

import { useState } from 'react';

interface AlbumDetailProps {
	title: string;
}
export default function AlbumDetailClient({ title }: AlbumDetailProps) {
	const [visible, setVisible] = useState(true);

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
			<h1 className="text-2xl font-bold mb-4 text-center"> Album 상세</h1>

			<div className="flex justify-center mb-4">
				<button
					onClick={() => setVisible((prev) => !prev)}
					className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 
    ${
			visible
				? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:from-purple-600 hover:to-pink-600'
				: 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
		}`}
				>
					{visible ? '숨기기' : '보이기'}
				</button>
			</div>

			{visible && (
				<ul className="list-disc list-inside text-lg text-gray-700">
					<li>{title}</li>
				</ul>
			)}
		</div>
	);
}
