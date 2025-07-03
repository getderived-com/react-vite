import { useEffect } from "react";
import { HomePage } from "./pages/home/home.page";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <HomePage />
    </div>
  );
}

export default App;
