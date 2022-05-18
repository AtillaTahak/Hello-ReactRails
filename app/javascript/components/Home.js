import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Link, Route } from "react-router-dom";

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <Link to="/hello">Hello</Link>
        <br/>
        <Link to="/greetings">Greetings</Link>


      </React.Fragment>
    );
  }
}

export default Home
