import React from "react";

export const Button = ({ customClass, label, ...props }) => {
  return (
    <button {...props} type="button" className={`py-px sm:py-1 border rounded align-middle text-base font-semibold text-white ${customClass}`} >
      {label}
    </button>
  );
};

export default Button
