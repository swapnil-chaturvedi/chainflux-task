import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBar, onBarChange } from "../redux/batch/batchActions";
import Input from "./Input";

function BarRow(props) {
  const { index, barNumber, barWeight, fineness, batchIndex } = props;

  const [barNumberInput, setBarNumberInput] = useState("");
  const [barWeightInput, setBarWeightInput] = useState("");
  const [finenessInput, setFinenessInput] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setKey(name);
    setValue(value);
    switch (name) {
      case "barNumber": {
        setBarNumberInput(value);
        return;
      }
      case "barWeight": {
        setBarWeightInput(value);
        return;
      }
      case "fineness": {
        setFinenessInput(value);
        return;
      }
      default:
        return "";
    }
  };
  const handleBlur = () => {
    dispatch(onBarChange({ barIndex: index, batchIndex, key, value }));
  };

  const handleClick = () => {
    dispatch(deleteBar({ batchIndex, barIndex: index }));
  };
  return (
    <div>
      <div className="bar-row-group">
        <div className="bar-rows">
          <Input
            placeholder="Bar Number"
            name="barNumber"
            value={barNumber || barNumberInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            placeholder="Bar Weight"
            name="barWeight"
            value={barWeight || barWeightInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            placeholder="Fineness"
            name="fineness"
            value={fineness || finenessInput}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {index === 0 ? (
          ""
        ) : (
          <span className="delete-bar-span" onClick={handleClick}>
            &times;
          </span>
        )}
      </div>
    </div>
  );
}

export default BarRow;
