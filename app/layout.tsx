import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "sparknine",
  description: "Spark Nine Community Project Forum",
};

export interface Params {
  params: {
    readonly id: string;
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} bg-background`}
    >
      <body>{children}</body>
    </html>
  );
}
