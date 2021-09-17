import React from "react";

function Button({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-green-100 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {title}
    </button>
  );
}

export default Button;
