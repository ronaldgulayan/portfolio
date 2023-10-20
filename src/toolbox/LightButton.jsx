import React from "react";
import Tooltip from "@mui/material/Tooltip";

function LightButton({ label = "light button", Icon, onClick }) {
  return (
    <Tooltip title={label}>
      <button
        onClick={onClick}
        className='bg-cyan text-left flex items-center gap-x-2 hover:bg-[rgb(0,110,110)] duration-100 select-none px-5 py-3 rounded-md font-sans font-bold active:bg-[rgb(0,90,90)]'
      >
        {Icon && <Icon className='w-5 h-5' />}
        <span className='hidden md:block'>{label}</span>
      </button>
    </Tooltip>
  );
}

export default LightButton;
