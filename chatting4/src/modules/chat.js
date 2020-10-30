import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
const CHANGE_FIELD = 'chat/CHANGE_FIELD';
const INITIAL_FIELD = 'chat/INITIAL_FIELD';

const SEND = 'chat/SEND';
const SEND_MESSAGE = 'chat/SEND_MESSAGE';
const SUCCESS_UPDATE_MESSAGES = 'chat/SUCCESS_UPDATE_MESSAGES';
const FAILURE_UPDATE_MESSAGES = 'chat/FAILURE_UPDATE_MESSAGES';

export const changeField = (msg) => ({
  type: CHANGE_FIELD,
  msg,
});

export const initialField = () => ({
  type: INITIAL_FIELD,
});

export const send = ({ msg, name }) => ({
  type: SEND,
  payload: {
    msg,
    name,
  },
});
function* updateSaga(action) {
  try {
    yield call(() =>
      axios.post('http://localhost:4000/chatLogs/', {
        msg: action.payload.msg,
        //name전달
        name: action.payload.name,
      })
    );
    const response = yield call(() =>
      axios.get('http://localhost:4000/chatLogs/')
    );
    console.log(response.data);
    yield put({
      type: SUCCESS_UPDATE_MESSAGES,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: FAILURE_UPDATE_MESSAGES,
      payload: e,
    });
  }
}
export function* chatSaga() {
  yield takeEvery(SEND, updateSaga);
}
const initialState = {
  error: null,
  form: {
    //메세지 폼의 내용
    id: null,
    msg: '',
  },
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        form: {
          msg: action.msg,
        },
      };
    case INITIAL_FIELD:
      return {
        ...state,
        form: initialState.form,
      };
    case SUCCESS_UPDATE_MESSAGES:
      return {
        ...state,
        form: action.payload,
      };
    case FAILURE_UPDATE_MESSAGES:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default chat;
