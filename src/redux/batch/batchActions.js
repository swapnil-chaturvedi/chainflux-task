import {
  ON_BATCH_NUMBER_CHANGE,
  ON_BAR_CHANGE,
  ADD_BATCH,
  ADD_BAR,
  DELETE_BATCH,
  DELETE_BAR,
} from "./batchTypes";

export const onBatchNumberChange = (index, value) => {
  return { type: ON_BATCH_NUMBER_CHANGE, payload: { index, value } };
};

export const onBarChange = (payload) => {
  return { type: ON_BAR_CHANGE, payload };
};

export const addBatch = () => {
  return {
    type: ADD_BATCH,
  };
};

export const addBar = (data) => {
  return {
    type: ADD_BAR,
    payload: data,
  };
};

export const deleteBatch = (data) => {
  return {
    type: DELETE_BATCH,
    payload: data,
  };
};

export const deleteBar = (data) => {
  return {
    type: DELETE_BAR,
    payload: data,
  };
};
