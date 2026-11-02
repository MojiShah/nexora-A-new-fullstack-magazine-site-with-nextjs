import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "NEXORA | دنیای تکنولوژی",
    template: "%s | NEXORA",
  },
  description: "مجله تخصصی تکنولوژی، برنامه‌نویسی و هوش مصنوعی",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
