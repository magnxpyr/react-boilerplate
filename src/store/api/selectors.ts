import {createSelector} from "reselect";
import {getQuerySelector} from "@redux-requests/core";

export const getData = (actionType: string) =>
  createSelector(
    getQuerySelector({type: actionType, multiple: true}),
    state => (state && state.data) || {},
  );

export const getError = (actionType: string) =>
  createSelector(
    getQuerySelector({type: actionType, multiple: true}),
    state => (state && state.error) || {},
  );

export const getPending = (actionType: string) =>
  createSelector(
    getQuerySelector({type: actionType, multiple: true}),
    state => (state ? (state as any).pending : 0) > 0,
  );

export const getLoaded = (actionType: string) =>
  createSelector(
    getQuerySelector({type: actionType, multiple: true}),
    state => (state ? (state as any).pending : 0) === 0,
  );
