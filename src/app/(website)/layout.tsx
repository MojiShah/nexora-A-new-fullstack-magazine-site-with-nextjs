import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

interface IRootLayout {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: Readonly<IRootLayout>) {
  return (
    <div dir="rtl" className="min-h-screen">
      <Navbar />
      <main className="min-h-[70vh]">
        {children}
        {modal}
      </main>
      <Footer />
    </div>
  );
}
