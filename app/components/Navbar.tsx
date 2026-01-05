export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-bold">Saman</span>
        <div className="space-x-6 text-sm text-gray-600">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
