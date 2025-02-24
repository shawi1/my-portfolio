import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#1E1E1E] text-white py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">Sean Hawi</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
