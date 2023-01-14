import TrainerScreen from "./screens/TrainerScreen";
import 'bootstrap/dist/css/bootstrap.css';
import WithContext from "./hoc/WithContext";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import './App.scss';

function App({state, dispatch}) {
  console.log(state)
  return (
    <div className="App">
      <LoginScreen/>
    </div>
  );
}

export default WithContext(App);
