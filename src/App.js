import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Screen from "./components/Screen";
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
              prevState === projects.length - 1 ? 0 : prevState + 1
            )
          : setCarouselState((prevState) =>
              prevState === 0 ? projects.length - 1 : prevState - 1
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
    <div
      className="container flex"
      style={{ backgroundColor: projects[carouselState]["background-color"] }}
    >
      <Header
        textColor={projects[carouselState]["text-color"]}
        buttonColor={projects[carouselState]["contrast-color"]}
      />
      <main className="flex">
        <Text
          title={projects[carouselState].title}
          description={projects[carouselState].description}
          techStack={projects[carouselState].tech_stack}
          textColor={projects[carouselState]["text-color"]}
        />
        {/* <Screen /> */}
        <div className="flex navigation">
          {projects.map((project) => {
            return (
              <span
                className="flex pagination"
                style={{
                  borderColor: projects[carouselState]["text-color"],
                  backgroundColor:
                    carouselState === project.id &&
                    projects[carouselState]["text-color"],
                }}
                onClick={() => setCarouselState(project.id)}
              ></span>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
