import React from "react";

export const Header = () => {
  return (
    <div className=" z-50 fixed right-2 left-2 h-20  bg-yellow-500  rounded-xl mt-2 flex items-center justify-between ">
      <div className="flex ml-2">
        <img src="src/assets/img/logo.png" />
        <span className="flex items-center text-2xl">
          Bi<span className="font-semibold">Power</span>
        </span>
      </div>
      <div className="flex items-center justify-between mr-2 text-xs text-gray-700">
        <div className="flex items-center">
          <img src="src/assets/img/vietnam.png" />
          <p className="ml-2">Tiếng Việt</p>
          <img className="ml-2" src="src/assets/img/Path.png" />
        </div>
        <div className="mr-2 ml-12 flex items-center">
          <p>Nguyễn Trần B</p>
          <img className="ml-2" src="src/assets/img/Path.png" />
        </div>
      </div>
    </div>
  );
};
