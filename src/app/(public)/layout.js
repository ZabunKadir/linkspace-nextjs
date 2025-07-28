import PublicLayout from "@/components/Layout/PublicLayout";

export default function Layout({ children }) {
  return (
    <PublicLayout>
      {/* Navbar veya boş layout */}
      {children}
    </PublicLayout>
  );
}
