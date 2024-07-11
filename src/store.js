import { legacy_createStore as createStore ,compose} from "redux";
import createSagaMiddleware from  'redux-saga';
import { combineReducers,applyMiddleware } from "redux";
import rootSaga from "./sagas/root-saga";
import rootReducer from "./reducers/root-reducer";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;



const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

sagaMiddleware.run(rootSaga);

export default store;


