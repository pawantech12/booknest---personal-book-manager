import "../globals.css";
import Navigation from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
