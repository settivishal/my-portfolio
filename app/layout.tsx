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
        <nav className="sticky top-0 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto p-4 flex justify-between">
            <h1 className="text-xl font-bold">Vishal Setti</h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#experience" className="hover:text-blue-600">Experience</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
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
