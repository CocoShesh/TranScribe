import { useTheme } from "../../context/ThemeContext";
const Header = () => {
  const { handleChangeTheme, theme } = useTheme();

  const handleNewScribe = (): void => {
    window.location.href = "/";
  };
  return (
    <header className="flex items-center justify-between px-5 w-full max-sm:px-2  2xl:w-[1500px]">
      <div className="flex items-center gap-5 w-full">
        <img
          src={theme ? "/logo3.svg" : "/Logo-For-DarkTheme.png"}
          alt="Logo"
          className="h-20 w-20"
        />
      </div>
      <section className="flex items-center justify-end gap-5 w-full pr-3">
        <section className="h-7 w-12 relative rounded-full bg-[#0079ea]">
          <div
            onClick={handleChangeTheme}
            className={`absolute h-5 w-5 cursor-pointer transition-transform duration-300 ease-in-out  bg-white rounded-full top-1  ${
              theme ? "translate-x-6" : "translate-x-1"
            }`}
          ></div>
        </section>
        <button
          onClick={handleNewScribe}
          className="h-9 w-24 rounded-md hover:bg-[#0079ea]   hover:border-none  hover:text-white border border-[#183153] transform transition-all duration-500 ease-in-out dark:border-white dark:text-white"
        >
          New
        </button>
      </section>
    </header>
  );
};

export default Header;
