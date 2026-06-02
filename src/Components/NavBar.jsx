
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          MyStore
        </Link>

        
        <ul className="flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/Products"
              className="transition hover:text-blue-600"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/About"
              className="transition hover:text-blue-600"
            >
              About
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}