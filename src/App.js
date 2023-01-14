import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import UserScreen from "./screens/UserScreen/UserScreen";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrainerScreen from "./screens/TrainerScreen/TrainerScreen";
import React from "react";
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'

function App({ state, dispatch }) {
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={state.user.role === "Trainer" ? <TrainerScreen /> : (state.user.role === "User" ? <UserScreen /> : <LoginScreen />)}></Route>
          <Route path="/register" element={<RegisterScreen></RegisterScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WithContext(App);
