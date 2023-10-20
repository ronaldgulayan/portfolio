import React from "react";
import Container from "../components/Container";
import LightButton from "../toolbox/LightButton";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

function About() {
  return (
    <Container className='about_page bg-[#eee] overflow-hidden py-10 h-fit flex flex-col gap-y-6'>
      <h1 className='text-center text-6xl text-darkest font-popping'>
        ABOUT <span className='text-cyan'>ME</span>
      </h1>
      <div className='w-full flex gap-5 md:flex-row flex-col'>
        <div className='flex justify-center' data-aos='fade-right'>
          <img
            className='w-72 h-72 border-8 shadow-md border-slate-400 object-cover rounded-full'
            src='/img/ron.jpg'
          />
        </div>
        <div
          data-aos='fade-left'
          className='w-full md:w-[calc(100%-18rem)] flex flex-col gap-y-3'
        >
          <h1 className='text-dark font-roboto-bold text-3xl'>
            App Dev & Web Dev
          </h1>
          <p className='text-slate-600 font-roboto-medium text-lg leading-6'>
            My name is{" "}
            <span className='text-dark font-bold'>Ronald Gulayan</span>, just an
            ordinary person, and my dream is to become an application developer
            or web developer. I always enjoy creating something on my own and
            challenging myself in various things.
          </p>
          <div className='grid grid-cols-2 gap-x-2 text-slate-500 font-roboto-regular'>
            <ul className='truncate overflow-x-scroll'>
              <li>
                Name:{" "}
                <span className='font-bold text-dark'>Gulayan, Ronald G.</span>
              </li>
              <li>
                Age: <span className='font-bold text-dark'>21</span>
              </li>
              <li>
                Email:{" "}
                <span className='font-bold text-dark'>
                  ronaldgulayan00@gmail.com
                </span>
              </li>
            </ul>
            <ul className='truncate'>
              <li>
                Phone:{" "}
                <span className='font-bold text-dark'>+639384535***</span>
              </li>
              <li>
                Address:{" "}
                <span className='font-bold text-dark'>
                  Blk 1 Lot 1 Fake Street Cavite
                </span>
              </li>
              <li>
                Hobbies:{" "}
                <span className='font-bold text-dark'>
                  Coding, Solving logic, ML
                </span>
              </li>
            </ul>
          </div>
          <div className='flex gap-x-1'>
            <LightButton
              onClick={() => {
                const skill = document.querySelector(".skill_page");
                window.scrollTo({
                  top: skill.offsetTop - 95,
                  behavior: "smooth",
                });
              }}
              Icon={VscTools}
              label='My Skills and Tools'
            />
            <LightButton
              onClick={() => {
                const element = document.createElement("a");
                element.href = "../assets/document/CV.pdf";
                element.download = "ronaldgulayan_cv.pdf";
                element.click();
              }}
              Icon={AiOutlineCloudDownload}
              label='Download my CV'
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
