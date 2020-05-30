import {FETCH_USER_DATA} from "./constants";

export const fetchUser = () => {
  return {
    type: FETCH_USER_DATA,
    request: {
      url: '/getUserData',
    },
  }
};
