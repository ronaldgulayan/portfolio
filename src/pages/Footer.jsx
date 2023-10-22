import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  const icons = [
    {
      label: "Facebook",
      url: "https://www.facebook.com/ronald.gulayan/",
      Icon: FaFacebook,
    },
    {
      label: "Github",
      url: "https://github.com/ronaldgulayan",
      Icon: FaGithub,
    },
  ];

  return (
    <div className='w-full py-10 px-pad bg-white flex flex-col gap-y-5 md:flex-row items-center justify-between'>
      <h1 className='text-4xl dark:text-darkest text-white border-l-[6px] pl-3 border-l-cyan font-popping'>
        Ron?
      </h1>
      <div className='flex items-center gap-x-3'>
        {icons.map((icon, i) => {
          return (
            <Tooltip key={i} title={icon.label} arrow>
              <a href={icon.url}>
                <icon.Icon className='w-5 h-5 text-darkest cursor-pointer' />
              </a>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
