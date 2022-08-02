/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import APIService from '../../../APIService';

import { setLoader } from './actions';
import ActionTypes from './constants';

export function* sendMessages(action) {
  try {
    yield put(setLoader(true))
    const data = action.payload;
    const MessageService  = APIService.getMessageRunner();
    const response = yield call(() =>
    MessageService.postMessage(data),
    );
  } catch (err) {
    throw err;
  } finally {
    yield put (setLoader(false))
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* sendMessage() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.SEND_MESSAGE, sendMessages);
}
