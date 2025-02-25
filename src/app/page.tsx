import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-between space-y-6">
          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg text-center md:text-left">
            <h1 className="text-4xl font-extrabold">My Portfolio</h1>
            <p className="text-lg text-gray-400 mt-2">
              Sean Hawi | Computer Science Major | Software Engineering
            </p>
          </div>

          <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg flex justify-center">
            <Image 
              src="/me.png" 
              alt="My Profile Picture"
              width={250} 
              height={250} 
              className="rounded-full border-4 border-gray-600 shadow-md"
              priority
            />
          </div>
        </div>

        <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg flex flex-col justify-center h-full">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">About Me</h2>
          <p className="text-gray-400 leading-relaxed">
            I am a Computer Science major at California State University, Fullerton. With experience in full stack technologies like Next.js, Node.js, Javascript/Typescript, React, and TailwindCSS.
            I enjoy building scalable, user-friendly applications with clean and efficient code.
          </p>
          <p className="text-gray-400 mt-4">
            I have worked on multiple projects, developing efficient, well-structured, and maintainable code. 
            I am passionate about problem-solving, innovation, continuous learning, and critical thinking.
          </p>
          <p className="text-gray-400 mt-4">
            When I'm not coding, I enjoy reading sci-fi novels, playing chess, and everything basketball.
          </p>
        </div>
      </div>

      {/* Updated Buttons with Modern Theme */}
      <div className="flex justify-center md:justify-start mt-12 space-x-4">
        <a href="/projects" className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md text-lg transition">
          View My Projects
        </a>
        <a href="/skills" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md text-lg transition">
          View My Skills
        </a>
        <a href="/contact" className="border border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white px-6 py-3 rounded-md text-lg transition">
          Contact Me
        </a>
      </div>
    </main>
  );
}
