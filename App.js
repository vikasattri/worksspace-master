import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
// import {createLogger} from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { PersistGate } from "redux-persist/integration/react";
import immutableTransform from "redux-persist-transform-immutable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducer from "./store/reducers";

export default function App() {
  const sagaMiddleware = createSagaMiddleware();
  const persistConfig = {
    transforms: [immutableTransform()],
    key: "primary",
    storage: AsyncStorage,
    whitelist: ["globalReducer"],
  };
  let persistedReducer = persistReducer(persistConfig, reducer);
  // const loggerMiddleware = createLogger({
  //   predicate: (getstate, actions) => __DEV__,
  // });
  function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(sagaMiddleware));
    return createStore(persistedReducer, initialState, enhancer);
  }

  const store = configureStore({});

  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar />
          <Navigation />
        </PersistGate>
      </Provider>
    </>
  );
}
