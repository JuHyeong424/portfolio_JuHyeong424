import "@/app/globals.css";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  variable: "--font-inter",
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: "--font-fira-code",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
