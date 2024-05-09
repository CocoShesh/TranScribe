import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { handleChangeTheme, theme } = useTheme();
  return (
    <header className="flex items-center justify-between px-5 w-full  2xl:w-[1500px]">
      <div className="flex items-center gap-5">
        <img
          src={theme ? "/logo3.svg" : "/logo.png"}
          alt="Logo"
          className="h-20 w-20"
        />
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
