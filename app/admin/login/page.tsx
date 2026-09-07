export const metadata = { robots: { index: false, follow: false } };

export default function AdminLoginPlaceholder() {
  return (
    <div className="page-content" style={{ textAlign: "center", padding: "80px 24px" }}>
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>Staff Login</h1>
      <p className="text-muted">
        The admin panel is being built in Phase 3 (Payload CMS + role
        permissions). This link will become a real login screen then.
      </p>
    </div>
  );
}
