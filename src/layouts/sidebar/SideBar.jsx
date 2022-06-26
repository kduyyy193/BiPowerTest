import React from "react";

export const SideBar = () => {
  return (
    <div className=" fixed  h-screen w-72  bg-gray-400 pt-40">
      <div className="mx-4 flex items-center justify-between pt-2">
        <div className="flex items-center">
          <img src="src/assets/img/Vector.png" />
          <span className="ml-2">Quản lý ứng viên</span>
        </div>
        <img src="src/assets/img/Path.png" />
      </div>
      <div className="mx-4 flex items-center justify-between pt-2">
        <div className="flex items-center">
          <img src="src/assets/img/Group.png" />
          <span className="ml-2">Quản lý nhân viên</span>
        </div>
        <img src="src/assets/img/Path.png" />
      </div>
    </div>
  );
};
