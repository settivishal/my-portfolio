import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        <nav className="sticky top-0 bg-white shadow-sm z-10">
          <div className="max-w-6xl mx-auto p-4 flex justify-between">
            <Link href="/" className="text-xl font-bold hover:text-blue-600">
              Vishal Setti
            </Link>
            <div className="flex gap-6">
              <Link href="about" className="hover:text-blue-600">
                About
              </Link>
              <Link href="experience" className="hover:text-blue-600">
                Experience
              </Link>
              <Link href="projects" className="hover:text-blue-600">
                Projects
              </Link>
            </div>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
