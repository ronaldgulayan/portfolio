import React, { useEffect, useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Container from "./components/Container";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Status from "./pages/Status";
import Projects from "./pages/Projects";
import AOS from "aos";
import ProjectModal from "./components/ProjectModal";
import { ModalContext, DetailsContext } from "./context/CustomContext";
import DetailsModal from "./components/DetailsModal";
import Footer from "./pages/Footer";
import "aos/dist/aos.css";
import Drawer from "./components/Drawer";

AOS.init();

function App() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [modal, setModal] = useState({
    state: false,
    data: null,
  });
  const [detailsModal, setDetailsModal] = useState({
    state: false,
    data: null,
  });

  // useEffect(() => {
  //   const grids = document.querySelectorAll(".grid");
  //   grids.forEach((grid) => {
  //     console.log(grid);
  //   });
  // }, []);

  const callback = (entries, observe) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        if (element.id === "home") {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".con");
    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div>
      <DetailsContext.Provider
        value={{
          value: detailsModal,
          setValue: setDetailsModal,
        }}
      >
        <ModalContext.Provider
          value={{
            value: modal,
            setValue: setModal,
          }}
        >
          <ProjectModal />
          <DetailsModal />
          <ParticleBackground />

          <div className='w-full h-fit relative z-[2]'>
            <Header onClick={() => setIsDrawerVisible(true)} />
            <Drawer
              isVisible={isDrawerVisible}
              setIsVisible={setIsDrawerVisible}
            />
            <Home />
            <About />
            <Status />
            <Skills />
            <Projects />
            <Footer />
          </div>
        </ModalContext.Provider>
      </DetailsContext.Provider>
    </div>
  );
}

export default App;
