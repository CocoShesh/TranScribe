// import Card from "./components/Card";
// import { User } from "./context/User";

import Header from "./components/Header";
import MainContent from "./components/Main";

function App() {
  return (
    <>
      {/* <User /> */}
      {/* <Card /> */}
      <section className=" flex flex-col items-center min-h-screen   justify-center   w-full">
        <Header />
        <MainContent />
      </section>
    </>
  );
}

export default App;
