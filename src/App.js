import React from "react";
import { Provider } from "react-redux";
import  Store  from "./Store/Store"
import CombineRouter from "./Routing/CombineRouter";

function App() {
  return (
    <Provider store={Store}>
      <CombineRouter />
    </Provider>
  );
}

export default App;
