import React from 'react'
import { Route, Routes } from 'react-router';
import WithTrainerLayout from '../../hoc/WithTrainerLayout';
import CourseBuilderScreen from '../CourseBuilderScreen/CourseBuilderScreen';
import TrainerWelcomeScreen from '../TrainerWelcomeScreen/TrainerWelcomeScreen';
import TrainerRanking from "../TrainerRanking/TrainerRanking";

function TrainerScreen() {
  return (
    <div>
        <Routes>
          <Route path="/" exact element={<TrainerWelcomeScreen/>}></Route>
            <Route path="/add" element={<CourseBuilderScreen/>}></Route>
            <Route path="/ranking" element={<TrainerRanking/>}></Route>
        </Routes>
    </div>
  )
}

export default WithTrainerLayout(TrainerScreen);