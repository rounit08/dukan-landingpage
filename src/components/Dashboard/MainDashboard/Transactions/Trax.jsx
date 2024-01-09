import React from "react";
import "./Trax.css";
import MyTable from "./Table";
import TraxTop from "./TraxTop";
import Pagination from "./Pagination";

function Trax() {
  return (
    <div>
      <TraxTop />
      <MyTable />
      <Pagination />
    </div>
  );
}

export default Trax;
