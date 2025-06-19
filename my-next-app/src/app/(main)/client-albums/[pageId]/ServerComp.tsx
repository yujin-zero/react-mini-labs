// 이 파일은 반드시 서버에서만 동작해야해. 라고 명시
import 'server-only';

export default function ServerComp() {
	console.log('server-comp');

	return <div>서버 컴포넌트</div>;
}
