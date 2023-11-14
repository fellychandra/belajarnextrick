import React from "react";

const Pagination = ({ page, lastPage, setPage }: any) => {
  
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prevState: any) => prevState - 1);
    scrollTop()
  };
  const handleNextPage = () => {
    setPage((prevState: any) => prevState + 1);
    scrollTop()
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-base">
      <button
        onClick={handlePrevPage}
        className="transition-all border rounded p-2 bg-gradient-to-br from-rose-500 to-pink-600 text-white"
      >
        Prev
      </button>
      <p>
        {page} of {lastPage?.info.count}
      </p>
      <button
        onClick={handleNextPage}
        className="transition-all border rounded p-2 bg-gradient-to-br from-rose-500 to-pink-600 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
