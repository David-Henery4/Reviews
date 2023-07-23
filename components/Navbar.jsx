import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex gap-2">
        <li>
          <Link prefetch={true} href="/" className="text-orange-800 hover:underline font-orbitron font-bold text-xl" >
            Indie gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link prefetch={true} href="/reviews" className="text-orange-800 hover:underline" >
            Reviews
          </Link>
        </li>
        <li className="">
          <Link prefetch={true} href="/about" className="text-orange-800 hover:underline" >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
