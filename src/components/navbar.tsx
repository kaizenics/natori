export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between container px-12 py-9">
        <div className="flex justify-center">
            <h1>natori</h1>
        </div>
        <div className="flex-row items-center space-x-16">
            <ul className="font-montserrat flex lg:space-x-12 md:space-x-6">
                <li>Home</li>
                <li>Videos</li>
                <li>Albums</li>
                <li>About</li>
            </ul>
        </div>
      </nav>
    </>
  );
};
