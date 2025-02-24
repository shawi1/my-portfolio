import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="container mx-auto text-center px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-6">Contact Me</h1>
      <p className="text-gray-400">Feel free to reach out to me via email.</p>

      <a 
        href="mailto:seanhawi2004@gmail.com" 
        className="mt-4 text-blue-500 text-xl underline hover:text-blue-400"
      >
        seanhawi2004@gmail.com
      </a>

      <div className="flex space-x-6 mt-6">
        <a 
          href="www.linkedin.com/in/sean-hawi-37a4a525b" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition text-3xl"
        >
          <FaLinkedin />
        </a>

        <a 
          href="https://github.com/shawi1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-200 transition text-3xl"
        >
          <FaGithub />
        </a>
      </div>
    </main>
  );
}
