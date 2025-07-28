import MessagesWidget from "@/components/Common/MessagesHeader";
import AuthLayout from "@/components/Layout/AuthLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const token = cookies().get("accessToken")?.value;

  if (!token) {
    redirect("/login");
  }
  return (
    <div>
      <AuthLayout>{children}</AuthLayout>
      <MessagesWidget />
    </div>
  );
}
