// /app/(main)/layout.tsx
// -> /app/(main) 아래 존재하는 모든 페이지들이 공유할 레이아웃

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <div className="bg-blue-200">메인 레이아웃 Header</div>
      {children}
      <div className="mt-8 text-center bg-red-200">메인 레이아웃 Footer</div>
    </div>
  );
}
