import {RootState} from "../model";
import {ApiResponse} from "./model";
import {createSelector} from "reselect";

export const getData = (stateSelector: (state: RootState) => ApiResponse) =>
  createSelector(
    stateSelector,
    state => (state && state.data) || {},
  );

export const getError = (stateSelector: (state: RootState) => ApiResponse) =>
  createSelector(
    stateSelector,
    state => (state && state.error) || {},
  );

export const getPending = (stateSelector: (state: RootState) => ApiResponse) =>
  createSelector(
    stateSelector,
    state => (state ? state.pending : 0) > 0,
  );

export const getLoaded = (stateSelector: (state: RootState) => ApiResponse) =>
  createSelector(
    stateSelector,
    state => (state ? state.pending : 0) === 0,
  );
