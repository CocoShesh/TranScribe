import Header from "./components/Header";
import MainContent from "./components/Main";

function App() {
  return (
    <>
      <section className=" flex flex-col items-center min-h-screen   justify-center   w-full">
        <Header />
        <MainContent />
      </section>
    </>
  );
}

export default App;
