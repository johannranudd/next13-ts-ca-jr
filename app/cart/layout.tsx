export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mb-[8rem]">
      <div>{children}</div>
    </main>
  );
}
