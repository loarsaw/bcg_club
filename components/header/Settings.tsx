import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Language from "./language/Language";
import Theme from "./theme/Theme";

type Props = {};

const Settings = (props: Props) => {
  const [isSettingsOpen, toggleSettings] = React.useState<boolean>(false);
  return (
    <div className="relative md:hidden flex justify-between  items-center z-[150]">
      <div onClick={() => toggleSettings(true)}>
        <AiOutlineSetting style={{ fontSize: "1.5rem" }} />
      </div>
      {isSettingsOpen ? (
        <>
          <div
            className="fixed inset-0 -z-1 bg-black/20"
            onClick={() => toggleSettings(false)}
          ></div>
          <div className="absolute top-8 ltr:right-0 rtl:left-0 bg-palette-card shadow-md rounded-lg px-6 py-3 ">
            <Language />
            <hr className="my-1" />
            <Theme />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Settings;
