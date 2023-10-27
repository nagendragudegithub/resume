import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/rootReducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../reduxsaga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
