"use client";

import { FaMinus, FaPlus } from "react-icons/fa";

const MissionVision = ({ title, content, isOpen, onToggle }) => {
  return (
    <div
      className={`my-5 ${
        isOpen ? "" : "border-b border-gray-300"
      } py-3 transition-all duration-500 ease-in-out`}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-slate-100 font-semibold text-lg'>{title}</h3>

        <button onClick={onToggle}>
          {isOpen ? (
            <FaMinus className='text-cyan-100 cursor-pointer' />
          ) : (
            <FaPlus className='text-cyan-500 cursor-pointer' />
          )}
        </button>
      </div>

      {isOpen && (
        <div className='mt-3'>
          <p className='text-slate-300'>{content}</p>
        </div>
      )}
    </div>
  );
};

export default MissionVision;
