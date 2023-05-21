import "./globals.css";
import { Comme } from "next/font/google";
import Nav from "../components/Nav";
const inter = Comme({ subsets: ["latin"] });

export const metadata = {
  title: "Samir Ajdini - Software Developer",
  description: "Personal portfolio of projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
