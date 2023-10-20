import React, { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";

const HEADER_HEIGHT = 95;

const Button = ({ Icon, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='text-dark group flex items-center duration-100 select-none rounded-md cursor-pointer justify-between gap-x-3 p-2 hover:bg-slate-100'
    >
      <div className='flex items-center gap-x-3'>
        {Icon && <Icon className='w-6 h-6' />}
        <span className='font-roboto-bold text-lg'>{label}</span>
      </div>
      <MdChevronRight className='group-hover:opacity-100 w-6 h-6 opacity-0' />
    </div>
  );
};

function Drawer({ isVisible, setIsVisible }) {
  const btns = [
    {
      label: "Home",
      icon: AiFillHome,
    },
    {
      label: "About",
      icon: AiFillInfoCircle,
    },
    {
      label: "Project",
      icon: PiProjectorScreenChartFill,
    },
  ];

  const clickEventHandler = (label) => {
    let element;
    switch (label.toLowerCase()) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "about":
        element = document.querySelector(".about_page");
        window.scrollTo({
          top: element.offsetTop - HEADER_HEIGHT,
          behavior: "smooth",
        });
        break;
      case "project":
        element = document.querySelector(".project_page");
        window.scrollTo({
          top: element.offsetTop - HEADER_HEIGHT,
          behavior: "smooth",
        });
        break;
    }
    setIsVisible(false);
  };

  return (
    <div
      data-visible={isVisible}
      className='w-full data-[visible=true]:left-0 h-screen duration-300 -left-full fixed z-[5] gap-y-4 top-0 bg-white flex flex-col p-4'
    >
      <header className='w-full flex justify-end items-center'>
        <div
          onClick={() => setIsVisible(false)}
          className='flex items-center w-fit gap-x-2 hover:bg-slate-200 cursor-pointer select-none duration-200 text-dark bg-slate-100 border border-slate-200 py-2 px-3 rounded-md'
        >
          <HiChevronDoubleLeft className='w-7 h-7' />
          <span className='text-md font-roboto-bold'>Exit Menu</span>
        </div>
      </header>
      <hr />
      <div className='w-full flex flex-col'>
        {btns.map((data, i) => {
          return (
            <Button
              onClick={() => clickEventHandler(data.label)}
              key={i}
              label={data.label}
              Icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Drawer;
