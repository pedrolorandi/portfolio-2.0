import { useEffect, useState } from "react";
import useProjectRef from "./hooks/useProjectRef";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Screen from "./components/Screen";
import projects from "./data/projects.json";
import VIDEO from "./data/video";

function App() {
  const [carouselState, setCarouselState] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const references = useProjectRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (let entry of entries) {
        entry.isIntersecting && setCarouselState(entry.target.id);
      }
    });
    projects.map((project) => {
      observer.observe(references.current[project.id]);
    });
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollDirection = e.deltaY;

      if (!isScrolling) {
        setIsScrolling(true);

        setTimeout(() => {
          scrollDirection > 0
            ? setCarouselState(
                carouselState === projects.length - 1 ? 0 : carouselState + 1
              )
            : setCarouselState(
                carouselState === 0 ? projects.length - 1 : carouselState - 1
              );
          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }, 200);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling]);

  return (
    <>
      <div className="shadow"></div>
      <div
        className="flex container"
        style={{ backgroundColor: projects[carouselState]["background-color"] }}
      >
        <Header
          backgroundColor={projects[carouselState]["background-color"]}
          buttonColor={projects[carouselState]["contrast-color"]}
        />
        <main className="flex">
          <ul className="projects flex">
            {projects.map((project) => {
              return (
                <li
                  id={project.id}
                  key={project.id}
                  ref={(el) => (references.current[project.id] = el)}
                >
                  <Screen video={VIDEO[project.link]} />
                  <Text
                    title={project.title}
                    description={project.description}
                    techStack={project.tech_stack}
                    textColor={project["text-color"]}
                    link={project.link}
                  />
                </li>
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
