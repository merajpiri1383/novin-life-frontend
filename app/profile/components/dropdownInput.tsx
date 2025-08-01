'use client';
import React, { FC, useState } from "react";
import { Slide } from "react-awesome-reveal";

type Props = {
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string | null>>;
  items: string[];
  classNameDropDown?: string;
};

const DropDownInput: FC<Props> = ({
  className = "",
  placeholder = "",
  icon,
  value,
  setValue,
  items,
  classNameDropDown = "",
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`relative cursor-pointer w-full ${className}`}
      onClick={() => setShow((s) => !s)}
    >
      <p>{value ?? placeholder}</p>
      {icon}
      {show && (
        <Slide
          direction="up"
          className={`absolute inset-x-0 top-full mt-1 bg-white rounded-lg p-2 shadow-lg ${classNameDropDown}`}
          duration={300}
        >
          <div className="max-h-48 grid grid-cols-1 gap-2 overflow-y-auto hide-scrollbar">
            {items.map((item, idx) => (
              <p
                key={idx}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setValue(item);
                  setShow(false);
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </Slide>
      )}
    </div>
  );
};

export default DropDownInput;