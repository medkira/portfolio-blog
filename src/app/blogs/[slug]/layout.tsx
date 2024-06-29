export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center p-3 sm:p-10  ">
      {children}
    </section>
  );
}
