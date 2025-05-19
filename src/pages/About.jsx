import React from "react";
import Container from "../components/Container";
import LightButton from "../toolbox/LightButton";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

function getAge(date) {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  const dayDiff = today.getDate() - date.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}


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
            src='./img/ron.jpg'
          />
        </div>
        <div
          data-aos='fade-left'
          className='w-full md:w-[calc(100%-18rem)] flex flex-col gap-y-3'
        >
          <h1 className='text-dark font-roboto-bold text-3xl'>
            Freelancer and Developer
          </h1>
          <p className='text-slate-600 font-roboto-medium text-lg leading-6'>
            My name is{" "}
            <span className='text-dark font-bold'>Ronald Gulayan</span>, and I am an aspiring application and web developer. I am passionate about building things from the ground up and constantly challenging myself to learn and grow. What drives me is the excitement of solving problems and turning ideas into functional, real-world applications.
          </p>
          <div className='grid grid-cols-2 gap-x-2 text-slate-500 font-roboto-regular'>
            <ul className='truncate overflow-x-scroll'>
              <li>
                Name:{" "}
                <span className='font-bold text-dark'>Ronald G. Gulayan</span>
              </li>
              <li>
                Age: <span className='font-bold text-dark'>{getAge(new Date(2002, 6, 12))}</span>
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
                <span className='font-bold text-dark'>09384535499</span>
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
                  Coding, Creating application
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
                element.href = "./documents/resume.pdf";
                element.download = "ronaldgulayan-resume.pdf";
                element.click();
              }}
              Icon={AiOutlineCloudDownload}
              label='Download my Resume'
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
