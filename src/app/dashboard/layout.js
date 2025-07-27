import Footer from "@/components/Dashboard/Footer";
import Header from "@/components/Dashboard/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header full width, içi container */}
      <Header />

      {/* Ana içerik container içinde */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        {children}
      </main>

      {/* Footer container içinde (isteğe bağlı) */}
      <Footer />
    </div>
  );
}
