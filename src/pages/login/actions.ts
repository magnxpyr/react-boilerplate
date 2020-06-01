import {FETCH_USER} from "./constants";

export const fetchUser = () => ({
    type: FETCH_USER,
    request: {
      url: 'http://localhost:3000/db.json',
    },
});
