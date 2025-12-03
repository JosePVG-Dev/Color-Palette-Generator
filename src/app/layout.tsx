import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colorpalettehub.netlify.app"),
  title: "Color Palette Generator 🎨",
  description: "Generate random or custom color palettes and gradients easily.",
  keywords: ["colors", "palette", "gradients", "design", "art", "creative tools"],
  authors: [{ name: "Jose", url: "https://colorpalettehub.netlify.app" }],
  openGraph: {
    title: "Color Palette Generator",
    description: "Create vibrant color palettes and gradients for your projects.",
    url: "https://colorpalettehub.netlify.app",
    siteName: "Color Palette Generator",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Color Palette Generator Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-950`}
      >
        {/* Header */}
        <header className="w-full bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo o título */}
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 drop-shadow-lg hover:opacity-90 transition-opacity">
              <span className="text-3xl">🎨</span>
              Color Palette Generator
            </Link>
            {/* Botones */}
            <nav className="space-x-4">
              <Link
                href="/"
                className="btn bg-purple-200 text-purple-800 border-purple-300 hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="btn bg-purple-200 text-purple-800 border-purple-300 hover:bg-purple-300 hover:text-purple-900 transition-all duration-300 font-semibold"
              >
                About me
              </Link>
            </nav>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex-grow p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-gray-200 p-4 text-center shadow-lg">
          &copy; {new Date().getFullYear()} Color Palette Generator. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
