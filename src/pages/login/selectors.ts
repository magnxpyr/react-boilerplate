import {createSelector} from 'reselect';
import * as API from '../../store/api';
import {getUserData} from "../../store/selectors";
import {getQuerySelector} from "redux-saga-requests";
import {FETCH_USER} from "./constants";


export const getUser = getQuerySelector({ type: FETCH_USER });

export const getIsFetching = createSelector(
  API.selectors.getPending(getUserData),
  isFetching => isFetching,
);

export const getError =  createSelector(
  API.selectors.getError(getUserData),
  error => error,
  );

export const getLoaded = createSelector(
  API.selectors.getLoaded(getUserData),
  isLoaded => isLoaded,
  );
