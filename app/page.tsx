const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        A simple starter template with Next.js and Tailwind CSS.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Project 1', 'Project 2', 'Project 3'].map((project) => (
          <div 
            key={project}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project}</h2>
            <p className="text-gray-600">Description goes here...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
