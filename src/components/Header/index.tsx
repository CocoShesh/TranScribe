const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 w-full  2xl:w-[1500px]">
      <div className="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" className="h-20 w-20" />
        <h1 className="text-[#183153] font-bold text-3xl">
          Tran<span className="text-[#0079ea]">Scribe</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
