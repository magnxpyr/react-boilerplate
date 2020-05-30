import {FETCH_USER} from "./constants";

export const fetchUser = () => {
  return {
    type: FETCH_USER,
    request: {
      url: '/getUserData',
    },
  }
};
