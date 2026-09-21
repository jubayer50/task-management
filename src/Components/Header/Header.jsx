const Header = () => {
  return (
    <nav className="py-6 md:py-8 px-6 md:px-8 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          {/* <img className="h-11.25" src="./assets/lws-logo-en.svg" alt="Lws" /> */}
          <h2 className="font-bold text-xl h-11.25">
            Task<span className="text-[#f5bf42]">Manager</span>
          </h2>
        </a>
      </div>
    </nav>
  );
};

export default Header;
