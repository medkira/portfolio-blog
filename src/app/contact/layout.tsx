export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center ">
      <div className="inline-block  justify-center text-center">{children}</div>
    </section>
  );
}
