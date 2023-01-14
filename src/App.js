import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import './App.scss';
import CourseBuilderScreen from "./screens/CourseBuilderScreen/CourseBuilderScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TrainerScreen from "./screens/TrainerScreen/TrainerScreen";

function App({state, dispatch}) {
  return (
    <div className="App" style={{minHeight: "100vh"}}>
      <BrowserRouter>
        <TrainerScreen />
      </BrowserRouter>
    </div>
  );
}

export default WithContext(App);
