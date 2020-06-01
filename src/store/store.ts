import {applyMiddleware, combineReducers, createStore} from "redux";
import {createDriver} from "@redux-requests/axios";
import {handleRequests} from "@redux-requests/core";
import axios from 'axios';
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = () => {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(axios),
  });
  
  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...requestsMiddleware)),
  );
  
  return store;
};

export default configureStore;
