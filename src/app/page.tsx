import React from "react";
import MonacoEditor from '../../components/editorComponent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-gray-200 rounded-lg shadow-lg p-6 w-[90vw] h-[90vh] flex flex-col">
        <h2 className="text-lg font-semibold ">Enter you text here</h2>
        <div >
          <MonacoEditor code = {" CREATE TABLE TestTable ASSELECT customername,contactname FROM customers;"}/>
        </div>
      </div>
    </div>
  );
}
