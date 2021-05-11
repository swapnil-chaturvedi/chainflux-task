import React, { memo } from "react";

function Input(props) {
  const {
    placeholder = "",
    value = "",
    name = "",
    onChange,
    onBlur,
    batchNumber,
  } = props;
  return (
    <input
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      className={`${batchNumber ? `batch-number-input` : `bar-input`}`}
    />
  );
}

export default memo(Input);
