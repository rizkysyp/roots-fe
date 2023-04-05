import { combineReducers } from "redux";

import kotaReducer from "./kotaReducer";

const rootReducer = combineReducers({
  kota: kotaReducer,
});

export default rootReducer;
