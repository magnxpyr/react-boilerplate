import {applyMiddleware, combineReducers, createStore} from "redux";
import {createDriver} from "redux-saga-requests-axios";
import {handleRequests} from "redux-saga-requests";
import {all} from "q";
import axios from 'axios';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = (initialState = {}) => {
  const { requestsReducer, requestsSagas, requestsMiddleware } = handleRequests({
    driver: createDriver(axios),
    promisify: true,
    cache: true,
    ssr: 'client',
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  const middleware = [...requestsMiddleware, sagaMiddleware];
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  function* rootSaga() {
    yield all(requestsSagas);
  }

  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
