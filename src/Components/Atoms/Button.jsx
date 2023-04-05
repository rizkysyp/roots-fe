import React from "react";

const ButtonAttomic = ({ children, onClick, variant }) => {
  const baseStyles =
    "py-2 ml-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
    success: "bg-green-500 text-white hover:bg-green-700",
    warning: "bg-yellow-500 text-white hover:bg-yellow-700",
  };
  const classes = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAttomic;
