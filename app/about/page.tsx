export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
        <p className="text-lg leading-relaxed">
          Dedicated M.S. in Computer Science student seeking software development opportunities, 
          with expertise in backend development, algorithms, and programming. Passionate about 
          building efficient, scalable systems and driven to contribute innovative solutions 
          to the tech industry.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">University of Florida</h4>
                <p>Master of Science – Computer Science</p>
                <p className="text-gray-600">CGPA: 4.0 | Aug 2024 - Aug 2026</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'JavaScript', 'Java', 'Go', 'Node.js', 
                'React', 'AWS', 'Docker', 'MongoDB',
                'PostgreSQL', 'GraphQL', 'Redis'
              ].map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
