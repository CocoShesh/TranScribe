import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const { handleChangeTheme, theme } = useTheme();
  return (
    <header className="flex items-center justify-between px-5 w-full  2xl:w-[1500px]">
      <div className="flex items-center gap-5">
        <img src="/logo.png" alt="Logo" className="h-20 w-20" />
        <h1 className="text-[#183153] font-bold text-3xl">
          Tran<span className="text-[#0079ea]">Scribe</span>
        </h1>
      </div>
      <section className="h-7 w-12 relative rounded-full bg-[#0079ea]">
        <div
          onClick={handleChangeTheme}
          className={`absolute h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out  bg-white rounded-full top-1  ${
            theme ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </section>
    </header>
  );
};

export default Header;
