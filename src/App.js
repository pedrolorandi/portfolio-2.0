import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import projects from "./data/projects.json";

function App() {
  const [carouselState, setCarouselState] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollDirection = e.deltaY > 0 ? "down" : "up";

      if (!isScrolling) {
        setIsScrolling(true);

        scrollDirection === "down"
          ? setCarouselState((prevState) =>
              prevState === projects.length ? 0 : prevState + 1
            )
          : setCarouselState((prevState) =>
              prevState === 0 ? projects.length : prevState - 1
            );

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  return (
    <>
      <Header />
      <main className="flex">{carouselState}</main>
    </>
  );
}

export default App;
