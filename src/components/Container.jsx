import React from "react";
import PropTypes from "prop-types";

// min-h-[calc(100vh-6rem)]

function Container({ children, className }) {
  return (
    <div
      id='container'
      className={"con w-full text-slate-200 px-pad-md md:px-pad " + className}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Container;
