import Logo from "./logo"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section >
      {/* Include shared UI here e.g. a header or sidebar */}

      <div className="header">
        <div className="logo">
        <Logo />
        </div>
      </div>
      <h2></h2>
      <nav></nav>

      {children}
    </section>
  );
}
