import React from "react";
// import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from '../configureStore';
import { Provider } from "react-redux";

import HelloWorld from "./HelloWorld";
import Home from "./Home";
import Greeting from "./Greeting";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/greetings" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;