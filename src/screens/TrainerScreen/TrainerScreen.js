import React from 'react'
import { Route, Routes } from 'react-router';
import WithTrainerLayout from '../../hoc/WithTrainerLayout';
import CourseBuilderScreen from '../CourseBuilderScreen/CourseBuilderScreen';
import TrainerWelcomeScreen from '../TrainerWelcomeScreen/TrainerWelcomeScreen';
import UserRanking from '../UserRanking/UserRanking';

function TrainerScreen() {
  return (
    <div>
        <Routes>
          <Route path="/" exact element={<TrainerWelcomeScreen/>}></Route>
            <Route path="/add" element={<CourseBuilderScreen/>}></Route>
            <Route path="/ranking" element={<UserRanking/>}></Route>
        </Routes>
    </div>
  )
}

export default WithTrainerLayout(TrainerScreen);