import Header from "./Header";
import Footer from "./Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function PublicLayout({ children }) {
  const token = cookies().get("accessToken")?.value;
  console.log("token", token);

  if (token) {
    redirect("/dashboard");
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
