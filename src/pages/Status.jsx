import React from "react";
import Container from "../components/Container";
import { BiSolidCoffee } from "react-icons/bi";
import { RiProjectorFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { ParallaxBanner } from "react-scroll-parallax";
import json from "../assets/projectData.json";

const Item = ({ label = "label", Icon, value = 0, ...props }) => {
  return (
    <div
      {...props}
      className='py-10 flex flex-col font-plasto text-md items-center justify-center'
    >
      <h1 className='text-4xl font-sans text-white font-bold'>{value}</h1>
      <div className='flex text-slate-200 items-center gap-x-2'>
        {Icon && <Icon className='w-4 h-4' />}
        {label}
        {Icon && <Icon className='w-4 h-4' />}
      </div>
    </div>
  );
};

function Status() {
  const getTotalProject = () => {
    return json.data.length;
  };

  return (
    <ParallaxBanner
      layers={[{ image: "./img/universe.jpg", speed: 15 }]}
      className='aspect-[2/1] h-40'
    >
      <div
        className='w-full md:justify-center scroll-bar overflow-y-hidden grid overflow-x-scroll absolute inset-0'
        style={{
          gridTemplateColumns: "repeat(3, 15rem)",
        }}
      >
        <Item
          data-aos='fade-right'
          value={getTotalProject()}
          label='Total Project'
          Icon={RiProjectorFill}
        />
        <Item
          data-aos='fade-up'
          value={getTotalProject() * 25}
          label='Cup of Coffee'
          Icon={BiSolidCoffee}
        />
        <Item
          data-aos='fade-left'
          value={105}
          label='Total Visitor'
          Icon={IoMdEye}
        />
      </div>
    </ParallaxBanner>
  );
}

export default Status;
