import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Repositories } from "./components/Repositories";

const App = () => {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="bg-cyan-300 max-w-6xl h-full flex flex-col">
        <Nav />
        <Hero />
        <Repositories />
      </div>
    </div>
  );
};
export default App;
