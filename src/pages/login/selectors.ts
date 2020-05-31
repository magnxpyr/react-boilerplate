import {createSelector} from 'reselect';
import * as API from '../../store/api';
import {FETCH_USER} from "./constants";


export const getUser = createSelector(
  API.selectors.getData(FETCH_USER),
  state => state.data
);

export const getIsFetching = createSelector(
  API.selectors.getPending(FETCH_USER),
  isFetching => isFetching,
);

export const getError =  createSelector(
  API.selectors.getError(FETCH_USER),
  error => error,
  );

export const getLoaded = createSelector(
  API.selectors.getLoaded(FETCH_USER),
  isLoaded => isLoaded,
  );
