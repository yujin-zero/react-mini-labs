'use client';

import { useEffect } from 'react';

export default function PostListClient() {
	useEffect(() => {
		console.log('PostListClient 마운트!');
	}, []);

	// 서버에서 최초 화면을 그릴 때, 브라우저에서 컴포넌트 만들 때 호출
	console.log('PostListClient: 클라이언트 컴포넌트');
	return (
		<div>
			<h1>포스트 리스트</h1>
			<ul>
				<li>게시글1</li>
				<li>게시글2</li>
				<li>게시글3</li>
			</ul>
		</div>
	);
}
