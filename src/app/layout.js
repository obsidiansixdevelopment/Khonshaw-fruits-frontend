import localFont from "next/font/local";
import "./globals.css";
import Whatsapp from "./_components/whatsapp";
import LayoutTwo from "./_components/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Khoshnaw Vegetables & Fruits Trading Company",
  description: "Khoshnaw Vegetables & Fruits Trading Company offers fresh, organic produce with a focus on quality, sustainability, and timely delivery. Explore our wide range of vegetables and fruits sourced directly from trusted farms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <LayoutTwo>
          <Whatsapp />
          {children}
        </LayoutTwo>

      </body>
    </html>
  );
}
