import { combineReducers } from 'redux';
import walletReducer from "./walletReducer";

const reducers = combineReducers({
  wallet: walletReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;