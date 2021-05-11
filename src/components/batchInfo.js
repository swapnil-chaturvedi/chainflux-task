import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import {
  addBar,
  deleteBatch,
  onBatchNumberChange,
} from "../redux/batch/batchActions";
import BarRow from "./barRow";

function BatchInfo({ batchIndex = 0, batcheDetail }) {
  const dispatch = useDispatch();
  const [batchNumberInput, setBatchNumberInput] = useState("");

  const handleBlur = () => {
    dispatch(onBatchNumberChange(batchIndex, batchNumberInput));
  };
  const handleChange = ({ target: { value } }) => {
    setBatchNumberInput(value);
  };

  const handleClick = () => {
    dispatch(deleteBatch({ batchIndex }));
  };

  const { batchNumber = "", bars = [] } = batcheDetail;
  return (
    <>
      <div>
        <div className="batch-number-input-grp">
          <Input
            name="batchNumber"
            placeholder="Batch Number"
            value={batchNumber || batchNumberInput}
            onChange={handleChange}
            onBlur={handleBlur}
            batchNumber
          />
          {batchIndex === 0 ? (
            ""
          ) : (
            <span className="delete-batch-span" onClick={handleClick}>
              &times;
            </span>
          )}
        </div>
        <div className="bar-group">
          <div className="heading-text bar-group-heading">
            Capture Bar Details
          </div>
          {bars &&
            bars.map((barInfo, index) => (
              <BarRow
                key={index}
                index={index}
                {...barInfo}
                batchIndex={batchIndex}
              />
            ))}
          <div className="add-bar-btn-grp">
            <button
              className="add-bar-button"
              onClick={() => dispatch(addBar({ batchIndex }))}
            >
              +
            </button>
            <span className="heading-text add-bar">Add Bar</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(BatchInfo);
