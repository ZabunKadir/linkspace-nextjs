import MessagesWidget from "@/components/Common/MessagesHeader";
import AuthLayout from "@/components/Layout/AuthLayout";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <AuthLayout>{children}</AuthLayout>
      <MessagesWidget />
    </div>
  );
}
