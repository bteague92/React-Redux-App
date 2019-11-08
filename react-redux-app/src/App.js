import React, { useState, useEffect, useReducer } from 'react';
import { connect } from "react-redux";
import Launches from "./components/launches";
import Header from "./components/header"
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header />
      <Launches />
    </div>
  );
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps, null)(App);
