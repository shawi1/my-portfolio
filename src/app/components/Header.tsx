export default function Header() {
    return (
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="mt-2">
          <a href="/" className="mx-2 hover:underline">Home</a>
          <a href="/about" className="mx-2 hover:underline">About</a>
          <a href="/projects" className="mx-2 hover:underline">Projects</a>
          <a href="/contact" className="mx-2 hover:underline">Contact</a>
        </nav>
      </header>
    );
  }