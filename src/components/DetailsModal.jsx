import React, { useContext } from "react";
import { DetailsContext } from "../context/CustomContext";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import {
  SiMysql,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiPhp,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const ToIcon = (_icon) => {
  let icon;
  switch (_icon.toLowerCase()) {
    case "html":
      icon = SiHtml5;
      break;
    case "css":
      icon = SiCss3;
      break;
    case "javascript":
      icon = SiJavascript;
      break;
    case "mysql":
      icon = SiMysql;
      break;
    case "c#":
      icon = TbBrandCSharp;
      break;
    case "python":
      icon = SiPython;
      break;
    case "java":
      icon = FaJava;
      break;
    case "react":
      icon = SiReact;
      break;
    case "php":
      icon = SiPhp;
      break;
    default:
      icon = FaCode;
      break;
  }
  return icon;
};

function DetailsModal() {
  const modalContext = useContext(DetailsContext);

  const data = modalContext.value.data;
  const closeEventHandler = () => {
    modalContext.setValue((curr) => {
      return {
        ...curr,
        state: false,
      };
    });
  };

  return (
    <div
      data-show={modalContext.value.state}
      className='fixed duration-300 data-[show=true]:pointer-events-auto data-[show=true]:opacity-100 pointer-events-none opacity-0 z-10 w-full h-screen top-0 bg-[rgba(0,0,0,0.33)] backdrop-blur-[2px] left-0 flex items-center justify-center'
    >
      <div
        data-show={modalContext.value.state}
        className='w-[93%] duration-300 overflow-hidden -translate-y-10 data-[show=true]:translate-y-0 rounded-xl text-dark lg:w-[40%] md:w-[70%] h-fit bg-white'
      >
        <header className='w-full px-5 h-14 flex items-center justify-between'>
          <h1 className='w-[calc(100%-2.5rem)] font-plasto text-dark truncate'>
            {data && data.title ? data.title : "No Title"}
          </h1>
          <button
            onClick={closeEventHandler}
            className='w-10 font-bold text-slate-500 hover:text-dark h-10'
          >
            &#10005;
          </button>
        </header>
        <div className='w-full font-roboto-medium text-slate-600 h-[calc(100%-3.5rem)] px-5 pb-4 bg-white'>
          <div>
            {data && data.description ? data.description : "No Description"}
          </div>
          <div className='w-full flex pt-3 items-center justify-start gap-x-2'>
            {data &&
              data.language &&
              data.language.map((icon, i) => {
                const Icon = ToIcon(icon);
                return (
                  <Tooltip key={i} title={icon} arrow>
                    <span>
                      <Icon className='w-5 h-5 text-darkest' />
                    </span>
                  </Tooltip>
                );
              })}
          </div>
          <div className='w-full flex justify-between items-center pt-2'>
            {data && data.url ? (
              <Link
                target='_blank'
                href={data.url}
                component='a'
                variant='body2'
              >
                {data.url_label ? data.url_label : "Show more"}
              </Link>
            ) : (
              <span></span>
            )}
            <button
              onClick={closeEventHandler}
              className='text-sm px-3 select-none py-1 text-white rounded-md font-roboto-medium border-2 border-cyan hover:bg-[rgb(0,110,110)] duration-100 bg-cyan'
            >
              OKAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
