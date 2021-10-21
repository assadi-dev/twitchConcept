import { combineReducers } from "redux";
import TopGamesReducers from "./reducers/TopGamesReducers";
import UserReducer from "./reducers/UserReducer";
const RootReducer = combineReducers({
  TopGamesReducers,
  UserReducer,
});

export default RootReducer;
