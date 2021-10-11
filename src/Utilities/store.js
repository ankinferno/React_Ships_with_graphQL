import { configureStore } from "@reduxjs/toolkit";
import Shipreducer from "./shipDataSlice";

export default configureStore({
  reducer: {
    ship: Shipreducer
  }
});
