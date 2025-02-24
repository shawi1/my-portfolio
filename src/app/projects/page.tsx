import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "YelpCamp",
      description:
        "Complete web application using Node.js, MongoDB, JavaScript, Bootstrap, EJS, and HTML. Allows users to add and review camping spots with image uploads.",
      github: "https://github.com/shawi1/YelpCamp",
      demo: "", // No live demo available
    },
    {
      title: "JasonBiz",
      description:
        "Built and deployed a static real estate website using React, including the jasonbiz.com app for the company's Real Estate division.",
      github: "",
      demo: "https://jasonbiz.com",
    },
  ];

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-6">My Projects</h1>
      <p className="text-gray-400 text-center mb-12">
        Here are some of the projects I've worked on.
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-200">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* Project Links */}
            <div className="flex space-x-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-200 transition text-lg flex items-center space-x-2"
                >
                  <FaGithub /> <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition text-lg flex items-center space-x-2"
                >
                  <FaExternalLinkAlt /> <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}