import React from "react";
import Language from "./language/Language";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Theme from "./theme/Theme";
type Props = {};

const index = (props: Props) => {
  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-palette-fill shadow-sm pt-4 z-[1000]">
      <div className="flex flex-col md:px-4 mb-2">
        <div className="flex items-center justify-between md:order-2 md:mt-2 relative">
          <p>Menu Goes Here</p>
          <div className="md:hidden">
            <Logo />
          </div>
         <p>Settings</p>
          <div className="hidden md:flex md:items-center md:justify-between">
            <Language />
            <Theme />
          </div>
        </div>
        <hr className="md:hidden" />
        {/* For Window Users */}
        <div className="mb-2 mt-4 md:mt-0 flex items-center md:order-1">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="flex-grow ">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default index;
