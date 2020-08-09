import React from "react";
import { Provider } from "react-redux";
import { store } from  './reducers/store';
import  Main from  './conponents/Main';
import  '../node_modules/semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Provider store={store}>
     <Main />
    </Provider>
  );
}

export default App;
