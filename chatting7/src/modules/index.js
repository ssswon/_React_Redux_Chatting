import { combineReducers } from 'redux';
import { chatSaga } from '../modules/chat';
import { all } from 'redux-saga/effects';
import chat from '../modules/chat';
const rootReducer = combineReducers({
  chat,
});

export const rootSaga = function* () {
  yield all([chatSaga()]);
};
export default rootReducer;
