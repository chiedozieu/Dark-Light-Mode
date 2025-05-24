import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themMode, setThemMode] = useState("light");

  const lightTheme = () => {
    setThemMode("light");
  };
  const darkTheme = () => {
    setThemMode("dark");
  };

  useEffect(() => {
   document.querySelector('html').classList.remove("dark", "light")
   document.querySelector('html').classList.add(themMode)
  }, [themMode])
  
  return (
    <ThemeProvider value={{ themMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          <div className="flex justify-end m-5">
            <ThemeBtn />
          </div>
          <Card />
          <div className="w-full max-w-sm mx-auto"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
