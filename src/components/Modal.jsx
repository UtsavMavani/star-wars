import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const formatDate = (date) => {
    date = new Date(date);
    return date.toLocaleDateString("en-GB").split("/").join("-");
  };

  const characterDetails = [
    { label: "Height", value: `${data?.height} cm` },
    { label: "Weight", value: `${data?.mass} kg` },
    { label: "Birth Year", value: data?.birth_year },
    { label: "Appears in", value: `${data?.films?.length} Films` },
    { label: "Added Date", value: formatDate(data?.created) },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        {/* Modal header */}
        <div className="flex justify-between border-b-2">
          <h2 className="text-lg font-semibold mb-4">
            {data?.name}
          </h2>

          <button
            className="h-2 text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal content */}
        <div class="h-auto grid grid-cols-2 gap-2 px-5 pt-5">
          {characterDetails.map((detail) => (
            <div className="flex gap-1">
              <span className="font-medium">{detail.label}: </span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
