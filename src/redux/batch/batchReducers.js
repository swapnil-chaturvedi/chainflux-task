import {
  ADD_BATCH,
  DELETE_BATCH,
  ADD_BAR,
  DELETE_BAR,
  ON_BATCH_NUMBER_CHANGE,
  ON_BAR_CHANGE,
} from "./batchTypes";

const initBar = { barNumber: "", barWeight: "", fineness: "" };

const initBatchInfo = {
  batchNumber: "",
  bars: [{ ...initBar }],
};

const initialState = {
  batches: [{ ...initBatchInfo }],
};

const batchReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ON_BATCH_NUMBER_CHANGE: {
      const { index, value } = action.payload;
      const batchesCopy = [...state.batches];
      const obj = { ...batchesCopy[index] };
      obj.batchNumber = value;
      batchesCopy[index] = obj;
      return {
        batches: batchesCopy,
      };
    }

    case ON_BAR_CHANGE: {
      const { batchIndex, barIndex, key, value } = action.payload;
      const batchesCopy = [...state.batches];
      const batchObj = { ...batchesCopy[batchIndex] };
      const barObj = { ...batchObj.bars[barIndex] };
      barObj[key] = value;
      batchObj.bars[barIndex] = { ...barObj };
      batchesCopy[batchIndex] = batchObj;
      return {
        batches: batchesCopy,
      };
    }

    case ADD_BATCH: {
      return {
        ...state,
        batches: [
          ...state.batches,
          {
            batchNumber: "",
            bars: [{ ...initBar }],
          },
        ],
      };
    }

    case ADD_BAR: {
      const { batchIndex } = action.payload;
      let copyBatches = [...state.batches];
      let barObj = { ...copyBatches[batchIndex] };
      barObj.bars = [...barObj.bars, { ...initBar }];
      copyBatches[batchIndex] = { ...barObj };
      return {
        ...state,
        batches: [...copyBatches],
      };
    }

    case DELETE_BATCH: {
      const { batchIndex } = action.payload;
      let copyBatches = [...state.batches];
      copyBatches.splice(batchIndex, 1);
      return {
        ...state,
        batches: [...copyBatches],
      };
    }

    case DELETE_BAR: {
      const { batchIndex, barIndex } = action.payload;
      let copyBatches = [...state.batches];
      let barObj = { ...copyBatches[batchIndex] };
      barObj.bars.splice(barIndex, 1);
      copyBatches[batchIndex] = { ...barObj };
      return {
        ...state,
        batches: [...copyBatches],
      };
    }

    default:
      return state;
  }
};

export default batchReducer;
