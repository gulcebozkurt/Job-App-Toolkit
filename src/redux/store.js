import { configureStore } from "@reduxjs/toolkit";
import job from './slices/JobSlice';

export default configureStore({ reducer: { job } });