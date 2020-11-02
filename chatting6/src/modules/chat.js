import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
const CHANGE_FIELD = 'chat/CHANGE_FIELD';
const INITIAL_FIELD = 'chat/INITIAL_FIELD';

const SEND = 'chat/SEND';
const SEND_MESSAGE_SUCCESS = 'chat/SEND_MESSAGE_SUCCESS';
const SEND_MESSAGE_FAILURE = 'chat/SEND_MESSAGE_FAILURE';
const SUCCESS_UPDATE_MESSAGES = 'chat/SUCCESS_UPDATE_MESSAGES';
const FAILURE_UPDATE_MESSAGES = 'chat/FAILURE_UPDATE_MESSAGES';
const UPDATE_MESSAGES = 'chat/UPDATE_MESSAGES';

export const updateMessages = () => ({
  type: UPDATE_MESSAGES,
});
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
function* sendSaga(action) {
  try {
    const response = yield call(() =>
      axios.post('http://localhost:4000/chatLogs/', {
        msg: action.payload.msg,
        //name전달
        name: action.payload.name,
      })
    );
    yield put({
      type: SEND_MESSAGE_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: SEND_MESSAGE_FAILURE,
      payload: e,
    });
  }
}
function* updateSaga(action) {
  try {
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
  yield takeEvery(SEND, sendSaga);
  yield takeEvery(UPDATE_MESSAGES, updateSaga);
}
const initialState = {
  form: {
    //메세지 폼의 내용
    id: null,
    msg: '',
  },
  msgs: [],
  result: null,
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
        msgs: action.payload,
      };
    case FAILURE_UPDATE_MESSAGES:
      return {
        ...state,
        error: action.payload,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        result: 'failure',
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        form: initialState.form,
      };

    default:
      return state;
  }
};
export default chat;
