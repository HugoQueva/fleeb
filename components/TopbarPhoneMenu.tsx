import { MenuIcon, XIcon } from "lucide-react";
import React, { useState } from "react";

const TopbarPhoneMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      {!isOpened ? (
        <MenuIcon
          onClick={toggleMenu}
          className={"z-50 self-center md:hidden"}
        />
      ) : (
        <XIcon onClick={toggleMenu} className={"z-50 self-center md:hidden"} />
      )}
      <div
        className={`z-40 absolute bottom-0 ${
          isOpened ? "right-0" : "right-[-100%]"
        } h-full w-96 bg-white transition-all duration-250`}
      ></div>
    </>
  );
};

export default TopbarPhoneMenu;
