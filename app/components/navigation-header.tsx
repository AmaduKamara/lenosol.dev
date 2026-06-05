import React from "react";
import TopBar from "./top-bar";

const NavigationHeader = () => {
  return (
    <header>
      <TopBar />
      <div className='border-t border-b border-gray-600 px-16 py-6'>Header</div>
    </header>
  );
};

export default NavigationHeader;
