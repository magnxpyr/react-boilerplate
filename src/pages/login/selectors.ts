import {createSelector} from 'reselect';
import {getQuerySelector} from "@redux-requests/core";
import {FETCH_USER} from "./constants";
import {UserDataState} from "./model";
import {useSelector} from "react-redux";

const userData = useSelector(getQuerySelector({ type: FETCH_USER }));

export const getUserData = createSelector(
  userData,
  (state: UserDataState) => state.data
);

export const getIsFetching = createSelector(
  userData,
  (state: UserDataState) => state.pending > 0,
);

export const getError =  createSelector(
  userData,
  (state: UserDataState) => state.error || {},
  );

export const getLoaded = createSelector(
  userData,
  (state: UserDataState) => state.pending === 0,
  );
