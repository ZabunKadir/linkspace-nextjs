import PublicLayout from "@/components/Layout/PublicLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Layout({ children }) {
  const token = cookies().get("accessToken")?.value;

  if (token) {
    redirect("/dashboard");
  }

  return (
    <PublicLayout>
      {/* Navbar veya boş layout */}
      {children}
    </PublicLayout>
  );
}
