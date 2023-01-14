import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import UserScreen from "./screens/UserScreen/UserScreen";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrainerScreen from "./screens/TrainerScreen/TrainerScreen";
import React from "react";

function App({ state, dispatch }) {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        {state.userType == "Trainer" ? <TrainerScreen /> : null}
        {state.userType == "User" ? <UserScreen /> : <LoginScreen />}
      </BrowserRouter>
    </div>
  );
}

export default WithContext(App);
