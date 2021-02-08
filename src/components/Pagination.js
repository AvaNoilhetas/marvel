import React from "react";
import Next from "./../assets/images/next.svg";
import Previous from "./../assets/images/previous.svg";

const Pagination = props => {
  const pageNb = Math.ceil(props.total / props.limit);
  let pagination = [];

  for (let i = 1; i <= pageNb; i++) {
    pagination.push(
      <li
        key={i}
        onClick={() => handleChangePage(i)}
        className={
          "flex justify-center items-center cursor-pointer font-primary text-dark leading-5 transition duration-150 ease-in w-8" +
          (props.page === i ? " bg-yellow border border-dark" : "")
        }
      >
        {i}
      </li>
    );
  }

  const handleChangePage = index => {
    props.setPage(index);
  };

  const handlePreviousPage = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
    }
  };

  const handleNextPage = () => {
    if (props.page < pageNb) {
      props.setPage(props.page + 1);
    }
  };

  return (
    <div className="flex justify-end items-center text-default mx-auto my-8">
      <div
        onClick={handlePreviousPage}
        className={
          "flex justify-center items-center cursor-pointer h-8 w-8 mr-1" +
          (props.page === 1 ? " hidden" : "")
        }
      >
        <img src={Previous} alt="Previous" className="w-4 h-4" />
      </div>
      <ul className="flex font-medium h-8">{pagination}</ul>
      <div
        onClick={handleNextPage}
        className={
          "flex justify-center items-center cursor-pointer h-8 w-8 ml-1" +
          (props.page === pageNb ? " hidden" : "")
        }
      >
        <img src={Next} alt="Next" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Pagination;
