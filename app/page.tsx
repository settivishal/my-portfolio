export default function Home() {
  return (
    <section id="home" className="min-h-[80vh] flex items-center">
      <div className="text-center w-full">
        <h1 className="text-5xl font-bold mb-4">Vishal Karthikeyan Setti</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          M.S. in Computer Science | Backend Software Engineer
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Contact Me
          </a>
          <a href="/resume.pdf" download className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50">
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
