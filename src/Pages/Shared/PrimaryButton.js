import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
