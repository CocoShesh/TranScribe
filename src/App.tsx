import Header from "./components/Header";
import Button from "./components/Button";
function App() {
  return (
    <>
      <section className=" flex flex-col items-center min-h-screen dark:bg-[#131313]  transform transition-colors duration-300 ease-in-out justify-center   w-full">
        <Header />
        <Button />
      </section>
    </>
  );
}

export default App;
