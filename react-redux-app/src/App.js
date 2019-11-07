import React, { useState, useEffect, useReducer } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { appReducer, initialState } from './reducers/appReducer';

function App() {

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches`
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="App">

    </div>
  );
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
