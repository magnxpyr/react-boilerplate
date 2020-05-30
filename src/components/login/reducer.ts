import {FETCH_USER_DATA} from "./constants";
import { requestsReducer } from 'redux-saga-requests';

const reducerUser = requestsReducer({
  actionType: FETCH_USER_DATA,
});
