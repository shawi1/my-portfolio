export default function Skills() {
    const skills = [
      {
        category: "Programming Languages",
        items: ["Python", "JavaScript", "TypeScript"],
      },
      {
        category: "Web Development",
        items: ["Node.js", "TailwindCSS", "Next.js", "React"],
      },
      {
        category: "AI/ML",
        items: ["Q-Learning", "Deep Q-Learning", "LLMs"],
      },
      {
        category: "Databases",
        items: ["MongoDB", "PostgreSQL"],
      },
    ];
  
    return (
      <main className="container mx-auto px-6 py-12">
        {/* Title and Subtitle */}
        <h1 className="text-4xl font-extrabold text-center mb-6">My Skills</h1>
        <p className="text-gray-400 text-center mb-12">
          Here are some of the technical skills I have developed over the years.
        </p>
  
        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-200">{skill.category}</h2>
              <ul className="mt-2 space-y-1 text-gray-300">
                {skill.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    );
  }
  