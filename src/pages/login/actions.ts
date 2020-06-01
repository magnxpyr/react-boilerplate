import {FETCH_USER} from "./constants";
import {call} from "@redux-saga/core/effects";
import {sendRequest} from "redux-saga-requests";

export const fetchUser = () => ({
    type: FETCH_USER,
    request: {
      url: 'http://localhost:3000/db.json',
    },
});

export function* fetchUsersSaga() {
  yield call(sendRequest, fetchUser(), { dispatchRequestAction: false });
 }
