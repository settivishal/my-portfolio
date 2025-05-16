export default function Projects() {
  const projects = [
    {
      title: "Zine – Smart Journal App",
      description: "Scalable digital journaling platform with Golang backend and React/Next.js frontend",
      features: [
        "JWT authentication + OAuth2.0 Google login",
        "AWS S3/CloudFront integration",
        "MongoDB with Redis caching",
        "Docker deployment on AWS ECS"
      ]
    },
    {
      title: "Reddit Engine Clone",
      description: "Distributed social platform using Go and Proto Actor",
      features: [
        "Actor-based concurrency model",
        "Karma system with voting",
        "Protocol buffers for serialization",
        "Load testing framework"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                {project.features.map((feat, j) => (
                  <li key={j}>{feat}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 px-6 py-4 border-t">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View Case Study →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
