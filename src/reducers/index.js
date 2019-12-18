import { combineReducers } from "redux";

import users from "./user.reducer";
import alert from "./alert.reducer";
import login from "./login.reducer";

const rootReducer = combineReducers({
  users,
  alert,
  login
});

export default rootReducer;
