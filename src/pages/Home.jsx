import React from "react";
import CubeButton from "../toolbox/CubeButton";

function Home() {
  return (
    <div
      id="home"
      className="home_page con w-full min-h-screen text-slate-200 px-pad-md md:px-pad md:grid md:grid-cols-2 flex flex-col gap-x-10 pt-[6.5rem] gap-y-10 md:pt-0 pb-5 md:pb-0"
    >
      <div className="flex flex-col justify-center gap-y-2">
        <h1 className="text-4xl font-roboto-bold">Hello!</h1>
        <a href="https://www.facebook.com/ronald.gulayan">
          <img
            src="https://readme-typing-svg.herokuapp.com?font=Poppins&size=30&duration=4000&pause=700&color=FFFFFF&vCenter=true&width=300&lines=I'm+Ronald+Gulayan.;Freelancer;Programmer;Software+Developer."
            alt="Typing SVG"
          />
        </a>
        <p className="text-[1.2rem] font-roboto-medium text-slate-300 mb-2">
          I am a passionate developer with a strong curiosity for technology and a constant drive to explore, learn, and build. Whether it’s web or software development, I take pride in creating meaningful and efficient solutions through code.
        </p>
        <CubeButton
          onClick={() => {
            const proj = document.querySelector(".project_page");
            window.scrollTo({
              top: proj.offsetTop - 95,
              behavior: "smooth",
            });
          }}
          icon
          text="Go to project"
          className="mt-2"
        />
      </div>
      <div className="flex items-center">
        <img
          className="duration-200 w-full md:w-[80%] object-cover logo-animation"
          src="./logo/nata.png"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default Home;
