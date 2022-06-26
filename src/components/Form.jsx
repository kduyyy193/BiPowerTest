import React from "react";

const Form = () => {
  return (
    <div className="flex justify-end flex-wrap-reverse py-4 bg-white rounded">
      <div className="mt-4 mr-4">
        <button className="ml-2 rounded px-6 py-1 border border-yellow-500">
          Tìm kiếm
        </button>
        <button className="ml-2 rounded px-6 py-1 bg-yellow-500 ">
          Export
        </button>
        <button className="ml-2 rounded px-6 py-1 bg-yellow-500 ">
          Import
        </button>
      </div>
      <div className="flex justify-evenly items-center  mr-4">
        <div>
          <label className="block" for="name">
            Họ tên
          </label>
          <input
            className="w-48 border border-gray-300 ml-2 rounded-sm mt-1 p-1 pr-0"
            placeholder="Nhập họ tên"
            type="text"
            id="name"
          />
        </div>
        <div>
          <label className="block" for="date">
            Ngày tháng năm sinh
          </label>
          <input
            className="w-48 border border-gray-300 ml-2 rounded-sm mt-1 p-1 pr-0"
            placeholder="dd/mm/yy"
            type="date"
            id="date"
          />
        </div>
        <div>
          <label className="block" for="vt">
            Vị trí
          </label>
          <select
            className="w-48 border border-gray-300 ml-2 rounded-sm mt-1 py-2  pr-0"
            id="vt"
          >
            <option value="pick">Chọn vị trí</option>
            <option value="fresher">Fresher</option>
            <option value="senior">Senior</option>
          </select>
        </div>
        <div>
          <label className="block" for="email">
            Email công ty
          </label>
          <input
            className="w-48 border border-gray-300 ml-2 rounded-sm mt-1 p-1 pr-0"
            placeholder="Nhập họ tên"
            type="email"
            id="email"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
