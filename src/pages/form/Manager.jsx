import React from "react";
import Form from "../../components/Form";
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const Manager = () => {
  return (
    <div className="h-screen w-screen pl-72 pt-28 text-gray-700">
      <div className="mx-8">
        <div className="my-4">
          <h2 className="font-semibold text-xl mb-2">Danh sách nhân viên</h2>
          <span>Danh sách nhân viên</span>
        </div>
        <Form />
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default Manager;
