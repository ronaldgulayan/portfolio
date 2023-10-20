import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Wave from "react-wavify";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaJava,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { wrapGrid } from "animate-css-grid";
// import shuffle from "lodash.shuffle";
// import { Flipped, Flipper } from "react-flip-toolkit";

const Item = ({ percentage = 0, label = "label", Icon }) => {
  const convertPercentage = (percentage) => {
    return 140 - (percentage / 100) * 140;
  };

  const GetIcon = () => {
    const css =
      "w-12 select-none text-dark group-hover:opacity-0 duration-300 h-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    const type = typeof Icon;
    if (type === "string") {
      return <img draggable={false} className={css} src={Icon} />;
    } else if (type === "function") {
      return <Icon className={css} />;
    }
    return null;
  };

  return (
    <div className='h-48 group relative rounded-xl hover:scale-105 duration-300 shadow-md border border-slate-300'>
      <div className='flex items-center z-[2] group-hover:outline-4 group-hover:outline-dark outline h-full rounded-xl w-full hover:backdrop-blur-sm duration-300 justify-center flex-col absolute top-0 left-0'>
        {GetIcon && <GetIcon />}
        <div className='flex flex-col select-none duration-300 group-hover:opacity-100 items-center opacity-0'>
          <h1 className='text-4xl font-popping text-darkest'>{`${percentage}%`}</h1>
          <h1 className='font-brandier text-md text-dark'>
            {label.toUpperCase()}
          </h1>
        </div>
      </div>
      <Wave
        className='h-full flex rounded-xl overflow-hidden  bg-slate-300'
        fill='rgb(0,136,136)'
        paused={false}
        options={{
          height: convertPercentage(percentage),
          amplitude: 20,
          speed: 0.15,
          points: 5,
        }}
      />
    </div>
  );
};

function Skills() {
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      label: "html",
      value: 80,
      icon: FaHtml5,
    },
    {
      id: crypto.randomUUID(),
      label: "css",
      value: 80,
      icon: FaCss3Alt,
    },
    {
      id: crypto.randomUUID(),
      label: "javascript",
      value: 80,
      icon: RiJavascriptFill,
    },
    {
      id: crypto.randomUUID(),
      label: "react",
      value: 70,
      icon: FaReact,
    },
    {
      id: crypto.randomUUID(),
      label: "tailwindcss",
      value: 100,
      icon: BiLogoTailwindCss,
    },
    {
      id: crypto.randomUUID(),
      label: "php",
      value: 50,
      icon: FaPhp,
    },
    {
      id: crypto.randomUUID(),
      label: "java",
      value: 60,
      icon: FaJava,
    },
    {
      id: crypto.randomUUID(),
      label: "c#",
      value: 60,
      icon: "/icons/csharp.png",
    },
    {
      id: crypto.randomUUID(),
      label: "figma",
      value: 50,
      icon: FaFigma,
    },
    {
      id: crypto.randomUUID(),
      label: "mysql",
      value: 50,
      icon: SiMysql,
    },
    {
      id: crypto.randomUUID(),
      label: "python",
      value: 50,
      icon: FaPython,
    },
  ]);

  return (
    <Container className='skill_page py-10 bg-[#eee] overflow-hidden'>
      <h1 className='text-center text-6xl text-darkest pb-10 font-popping'>
        My <span className='text-cyan'>Skills</span>
      </h1>
      <div
        data-aos='zoom-out-up'
        data-aos-duration='500'
        className='w-full duration-500 transition-all grid gap-5'
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
        }}
      >
        {data.map((data) => {
          return (
            <Item
              key={data.id}
              Icon={data.icon}
              label={data.label}
              percentage={data.value}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default Skills;
