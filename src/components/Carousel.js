import React from "react";

const Carousel = props => {
  return (
    <div className="container overflow-auto relative grid grid-flow-col-dense justify-start gap-x-4 px-0">
      {props.children}
    </div>
  );
};

export default Carousel;
