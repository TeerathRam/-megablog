import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-300",
    textColor = "text-white",
    classname = "",
    ...props 
}) {

  return (
    <button className={`px-5 py-2 rounded-lg 
          ${classname} 
          ${type} 
          ${bgColor} 
          ${textColor}`} {...props}>
            {children}
    </button>
  )
}

export default Button