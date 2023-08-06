export const Nav = () => {
  return (
    <header className="h-20 pb-8 text-white">
      <nav className="p-4 flex flex-row items-center justify-between">
        <div className="">
          <p className="text-4xl">Hitarth Desai</p>
        </div>
        <ul className="flex flex-row gap-12 text-2xl">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
