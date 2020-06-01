import {applyMiddleware, combineReducers, createStore} from "redux";
import {createDriver} from "redux-saga-requests-axios";
import {handleRequests} from "redux-saga-requests";
import {all} from "q";
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from "redux-devtools-extension";

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const configureStore = () => {
  const { requestsReducer, requestsSagas } = handleRequests({
    driver: createDriver(axiosInstance),
    promisify: true,
    cache: true,
    ssr: 'client',
  });
  
  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  function* rootSaga() {
    yield all(requestsSagas);
  }

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
