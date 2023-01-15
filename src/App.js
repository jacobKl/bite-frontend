import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import UserScreen from "./screens/UserScreen/UserScreen";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrainerScreen from "./screens/TrainerScreen/TrainerScreen";
import React from "react";
import RegisterScreen from './screens/RegisterScreen/RegisterScreen'
import Cookies from 'universal-cookie';

function App({ state, dispatch }) {
  async function getUser(token) {
    let result = await fetch("http://localhost:3001/user/getuser", { method: "GET", headers: { "Custom-Token": token } }).then(res => res.json())
    if (result.status == "success") {
      dispatch({ type: "SET_USER", payload: result.user })
    }
  }

  const cookies = new Cookies();
  if (state.user.token == "") {
    if (cookies.get("token") != undefined) {
      console.log(cookies.get("token"))
      getUser(cookies.get("token"))
    }
  }

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={state.user.role === "Trainer" ? <TrainerScreen /> : (state.user.role === "User" ? <UserScreen /> : <LoginScreen />)}></Route>
          <Route path="/register" element={<RegisterScreen></RegisterScreen>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default WithContext(App);
