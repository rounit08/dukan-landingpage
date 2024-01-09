import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <button className="prevBtn"> « Previous </button>
      <button className="numBtn ">&nbsp;1&nbsp;</button>
      <button className="numBtn ">... </button>
      <button className="numBtn ">10 </button>
      <button className="numBtn ">11 </button>
      <button className="numBtn ">12 </button>
      <button className="numBtn ">13 </button>
      <button className="numBtn ">14 </button>
      <button className="numBtn ">15 </button>
      <button className="numBtn ">16 </button>
      <button className="numBtn ">17 </button>
      <button className="numBtn ">18 </button>
      <button className="nextBtn">Next » </button>
    </div>
  );
}

export default Pagination;
