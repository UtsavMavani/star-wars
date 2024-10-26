import React from "react";

const Pagination = ({ total, pageSize, currentPage, onPageChange }) => {
   if (!total) return;

  const totalPages = Math.ceil(total / pageSize);
  const pageRange = 5;

  // Determine the page numbers to display
  const getPageNumbers = () => {
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);
    const adjustedStartPage = Math.max(1, endPage - pageRange + 1);

    return Array.from({ length: endPage - adjustedStartPage + 1 }, (_, i) => adjustedStartPage + i);
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* Previous Button */}
      <button
        className={`px-3 py-1 rounded-md ${currentPage === 1 ? "border border-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-md ${currentPage === page ? "bg-blue-500 text-white" : "border border-blue-500 text-gray-700"}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-3 py-1 rounded-md ${currentPage === totalPages ? "border border-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"}`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
