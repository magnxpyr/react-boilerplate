import {FETCH_USER} from "./constants";

export const fetchUser = () => ({
    type: FETCH_USER,
    request: {
      url: 'http://localhost:3000/db.json',
      method: 'GET'
    },
});

//
// handleRequests({
//   driver: createDriver(
//     {
//       [FETCH_USER]: () => ({
//         data: {
//           isLoggedIn: true,
//           email: 'ggg@gmail.com',
//         }
//       })
//     },
//     {
//       timeout: 500, // optional, in ms, defining how much time mock request would take, useful for testing spinners
//     },
//   ),
// });
