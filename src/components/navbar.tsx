function Navbar() {
  return (
    <ul className="flex justify-between items-center gap-2 rounded-full bg-mantle p-1">
      <li className="font-semibold rounded-full bg-surface-0 px-3 py-1.5">
        <a href="" className="text-sm tracking-wide text-subtext-1">
          Home
        </a>
      </li>
      <li className="px-3 py-1.5">
        <a href="" className="text-sm tracking-wide text-subtext-1">
          About
        </a>
      </li>
      <li className="px-3 py-1.5">
        <a href="" className="text-sm tracking-wide text-subtext-1">
          Project
        </a>
      </li>
      <li className="px-3 py-1.5">
        <a href="" className="text-sm tracking-wide text-subtext-1">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
