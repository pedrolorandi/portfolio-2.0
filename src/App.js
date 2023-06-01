import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Text from "./components/Text";
import Screen from "./components/Screen";
import projects from "./data/projects.json";
import MobileMenu from "./components/MobileMenu";
import VIDEO from "./data/video";

function App() {
  const [carouselState, setCarouselState] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollDirection = e.deltaY > 0 ? "down" : "up";

      if (!isScrolling) {
        setIsScrolling(true);
        setFlip(true);

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

    const handleTouchStart = (e) => {
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
      const touchX = e.touches[0].clientX;
      const touchThreshold = 80;

      if (touchStartX - touchX > touchThreshold) {
        setTimeout(() => {
          setCarouselState((prevState) =>
            prevState === projects.length - 1 ? 0 : prevState + 1
          );
          setTouchStartX(touchX);
        }, 200);
        setFlip(true);
      }

      if (touchX - touchStartX > touchThreshold) {
        setTimeout(() => {
          setCarouselState((prevState) =>
            prevState === 0 ? projects.length - 1 : prevState - 1
          );
          setTouchStartX(touchX);
        }, 200);
        setFlip(true);
      }
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isScrolling, touchStartX]);

  return (
    <>
      <div className="shadow"></div>
      <div
        className="flex container"
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
            link={projects[carouselState].link}
            flip={flip}
            setFlip={setFlip}
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
          </div>
        </main>
        <MobileMenu
          textColor={projects[carouselState]["text-color"]}
          buttonColor={projects[carouselState]["contrast-color"]}
        />
      </div>
    </>
  );
}

export default App;
