import React from "react";
//import Home from "./screens/Home";
import { PersistGate } from "redux-persist/integration/react";
import TestRedux from "./screens/TestRedux";
import EStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";
import { AlertProvider } from "./components/Alert";

import { store, persistor } from "./config/store";

EStyleSheet.build({
  $primaryColor: "#FF6F61",
  $inputText: "#797979",
  $backgroundInputText: "#fff"
});

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider>
        <TestRedux />
      </AlertProvider>
    </PersistGate>
  </Provider>
);
