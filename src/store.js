import { configureStore } from '@reduxjs/toolkit';
import stageReducer from './redux/stageSlice';

export default configureStore({
  reducer: {
    stage: stageReducer,
  },
});
