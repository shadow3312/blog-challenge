import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import MainNav from "@/components/main-nav";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Challenge - Home",
  description: "A blog sytem mangement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MainNav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
