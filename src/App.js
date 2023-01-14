import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import UserScreen from "./screens/UserScreen/UserScreen";
import './App.scss';
import { BrowserRouter } from "react-router-dom"
import TrainerScreen from "./screens/TrainerScreen/TrainerScreen";
import React from "react";

function App({ state, dispatch }) {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <UserScreen/>
        {/* {state.user.role === "Trainer" ? <TrainerScreen /> : (state.user.role === "User" ? <UserScreen /> : <LoginScreen />)} */}
      </BrowserRouter>
    </div>
  );
}

export default WithContext(App);
