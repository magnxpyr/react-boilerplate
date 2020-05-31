import {FETCH_USER} from "./constants";

export const fetchUser = () => ({
    type: FETCH_USER,
    request: {
      url: '/user',
    },
});
