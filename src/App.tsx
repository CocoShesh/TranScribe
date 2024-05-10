import Header from "./components/Header";
import Button from "./components/Button";
import Transcript from "./pages/Transcript";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <section className=" flex flex-col items-center min-h-screen dark:bg-[#131313]  transform transition-colors duration-300 ease-in-out justify-center   w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Button />} />
            <Route path="/transcript" element={<Transcript />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
