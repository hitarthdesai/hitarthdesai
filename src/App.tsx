import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Repositories } from "./components/Repositories";

const App = () => {
  return (
    <div className="bg-indigo-950 w-screen flex items-center justify-center">
      <div className="max-w-6xl h-full flex flex-col">
        <Nav />
        <Hero />
        <Repositories />
      </div>
    </div>
  );
};
export default App;
