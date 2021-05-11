import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BatchInfo from "./batchInfo";
import { addBatch } from "../redux/batch/batchActions";

function BatchesAndBars() {
  const dispatch = useDispatch();
  const batches = useSelector((state) => state.batches);

  return (
    <div className="batches">
      {batches.map((batchObj, index) => (
        <BatchInfo key={index} batcheDetail={batchObj} batchIndex={index} />
      ))}
      <div className="add-batch-btn-grp">
        <button
          className="add-batch-button"
          onClick={() => dispatch(addBatch())}
        >
          +
        </button>
        <span className="heading-text add-batch">Add Batch</span>
      </div>
    </div>
  );
}

export default BatchesAndBars;
