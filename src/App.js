import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Screen from "./components/Screen";
import projects from "./data/projects.json";
import VIDEO from "./data/video";

function App() {
  const [carouselState, setCarouselState] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollDirection = e.deltaY > 0 ? "down" : "up";

      if (!isScrolling) {
        setIsScrolling(true);

        setTimeout(() => {
          scrollDirection === "down"
            ? setCarouselState((prevState) =>
                prevState === projects.length - 1 ? 0 : prevState + 1
              )
            : setCarouselState((prevState) =>
                prevState === 0 ? projects.length - 1 : prevState - 1
              );
        }, 200);

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
          hi
          <ul className="projects flex">
            {projects.map((project) => {
              // return (
              //   <li key={project.id}>
              //     <Text
              //       title={project.title}
              //       description={project.description}
              //       techStack={project.tech_stack}
              //       textColor={project["text-color"]}
              //       link={project.link}
              //     />
              //     {/* <Screen video={VIDEO[project.link]} flip={flip} /> */}
              //   </li>
              // );
            })}
          </ul>
          {/* <Text
            title={projects[carouselState].title}
            description={projects[carouselState].description}
            techStack={projects[carouselState].tech_stack}
            textColor={projects[carouselState]["text-color"]}
            link={projects[carouselState].link}
          />
          <Screen video={VIDEO[projects[carouselState].link]} flip={flip} />
          <div className="flex navigation">
            {projects.map((project, idx) => {
              return (
                <span
                  key={idx}
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
          </div> */}
        </main>
      </div>
    </>
  );
}

export default App;
