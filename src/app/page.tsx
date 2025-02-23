import Header from 'components/Header.tsx';
import Footer from 'components/Footer.tsx';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="text-lg mt-2">Computer Science Major | Software Engineering Focus</p>
        </header>
        <section className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-700">
              I am a computer science major with a focus on software engineering. I have experience in building web applications using modern technologies like Next.js, React, and TailwindCSS.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="text-gray-700">Description of Project 1.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="text-gray-700">Description of Project 2.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-700">
              You can reach me at <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a>.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}