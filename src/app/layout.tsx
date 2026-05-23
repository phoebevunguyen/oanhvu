import type { Metadata } from "next";
import { Be_Vietnam_Pro, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam-pro",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vũ Nguyễn Hoàng Oanh | Screenwriter & Marketer Portfolio",
  description: "Portfolio cá nhân của Vũ Nguyễn Hoàng Oanh (Phoebe Vu Nguyen) - Biên kịch phim điện ảnh, truyền hình, Web Series & Chuyên viên Content Marketing.",
  keywords: ["Vũ Nguyễn Hoàng Oanh", "Phoebe Vu Nguyen", "Biên kịch", "Screenwriter", "89sGroup", "Siêu Lừa Gặp Siêu Lầy", "Quỷ Cẩu", "Portfolio", "Marketing Specialist"],
  openGraph: {
    title: "Vũ Nguyễn Hoàng Oanh | Screenwriter & Marketer",
    description: "Khám phá hành trình kể chuyện, các tác phẩm điện ảnh và các chiến dịch marketing nổi bật của Vũ Nguyễn Hoàng Oanh.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${beVietnamPro.variable} ${montserrat.variable} antialiased min-h-screen bg-white text-slate-800 selection:bg-pastel-pink`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
