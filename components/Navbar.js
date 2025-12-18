// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wider text-green-400">Outside Quest</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:text-green-300 transition duration-300">Dashboard</Link>
          <Link href="/profile" className="hover:text-green-300 transition duration-300">Profile</Link>
          <Link href="/about" className="hover:text-green-300 transition duration-300">About</Link>
        </div>
      </div>
    </nav>
  );
}