import { createSlice } from '@reduxjs/toolkit';
import { getAllAssets } from '../components/util/utils';

export const stageSlice = createSlice({
  name: 'stage',
  initialState: {
    assets: getAllAssets(),
    showSelect: false,
    placeToSelect: undefined,
    place1: undefined,
    place2: undefined,
    place3: undefined,
    place4: undefined,
  },
  reducers: {
    test: () => {
      console.log('Test');
    },
    handleSelectModal: (state, action) => {
      state.showSelect = action.payload;
    },
    setPlaceSelector: (state, action) => {
      state.placeToSelect = action.payload;
    },
    handlePlaceChange: (state, action) => {
      const asset = action.payload;
      if (!asset) return;
      switch (state.placeToSelect) {
        case 1:
          state.place1 = asset;
          break;
        case 2:
          state.place2 = asset;
          break;
        case 3:
          state.place3 = asset;
          break;
        case 4:
          state.place4 = asset;
          break;
      }
      state.placeToSelect = undefined;
      state.showSelect = false;
    },
    initialiseStage: state => {
      const assets = state.assets.assets;
      state.place1 = assets[Math.floor(Math.random() * assets.length)].profile;
      state.place2 = assets[Math.floor(Math.random() * assets.length)].profile;
      state.place3 = assets[Math.floor(Math.random() * assets.length)].profile;
      state.place4 = assets[Math.floor(Math.random() * assets.length)].profile;
    },
  },
});

export const {
  test,
  handleSelectModal,
  handlePlaceChange,
  setPlaceSelector,
  initialiseStage,
} = stageSlice.actions;

export default stageSlice.reducer;
