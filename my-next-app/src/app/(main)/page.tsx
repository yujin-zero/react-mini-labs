import Image from 'next/image';

export default function Home() {
	return (
		<div className="grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1>안녕하세요</h1>
			<p>저는 첫번째 페이지를 만들었습니다.</p>
			<Image src="/my_image.jpg" width={200} height={200} alt="스누피" />

			<button className="my-btn">버튼</button>
		</div>
	);
}
