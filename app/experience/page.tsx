export default function Experience() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "FoodHub Software Solutions",
      period: "June 2022 – July 2024",
      location: "Chennai, India",
      achievements: [
        "Developed Pre-Order API using Node.js and AWS CDK, reducing response times by 30%",
        "Refactored codebase into unified React Native, reducing duplication by 50%",
        "Improved application loading time by 35% and user engagement by 20%"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <div className="text-right">
                <p>{exp.period}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              {exp.achievements.map((item, j) => (
                <li key={j} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
