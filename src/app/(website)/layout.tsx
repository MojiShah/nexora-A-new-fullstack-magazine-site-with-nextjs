import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <div dir="rtl" className="min-h-screen">
      <Navbar />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </div>
  );
}
