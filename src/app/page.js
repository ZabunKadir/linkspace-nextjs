import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "LinkSpace",
  description: "Modern bağlantı yönetimi uygulaması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
