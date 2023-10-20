import React from "react";
import { BiMenu } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";

function Header({ onClick }) {
  return (
    <div className='w-full z-[3] duration-200 dark:bg-white dark:shadow-md h-[6rem] fixed top-0 backdrop-blur-[2px] flex items-center justify-between px-pad-md md:px-pad'>
      <h1 className='text-3xl md:text-4xl dark:text-darkest text-white border-l-[6px] pl-3 border-l-cyan font-popping'>
        Ron?
      </h1>
      <Tooltip title='Menu' placement='bottom' arrow>
        <span>
          <BiMenu
            onClick={onClick}
            className='w-11 h-11 dark:text-dark select-none text-white cursor-pointer p-1 md:hidden'
          />
        </span>
      </Tooltip>
      <ul className='md:flex hidden font-brandier font-bold text-slate-300 dark:text-slate-600 dark:[&>li:hover]:text-darkest gap-x-5 [&>li]:relative text-lg [&>li]:cursor-pointer [&>li]:after:content-[""] [&>li]:after:top-full [&>li]:after:absolute [&>li]:after:left-0 [&>li]:after:w-0 [&>li:hover]:after:w-full [&>li]:after:duration-300 [&>li:hover]:text-white [&>li]:duration-200 [&>li]:after:h-1 [&>li]:after:rounded-md [&>li]:after:bg-white dark:[&>li:hover]:after:bg-darkest'>
        <li className='f '>Home</li>
        <li>About</li>
        <li>Project</li>
      </ul>
    </div>
  );
}

export default Header;
