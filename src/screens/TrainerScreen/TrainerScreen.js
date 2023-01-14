import React from 'react'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import WithTrainerLayout from '../../hoc/WithTrainerLayout';
import CourseBuilderScreen from '../CourseBuilderScreen/CourseBuilderScreen';

function TrainerScreen() {
  return (
    <div>
        <Routes>
          <Route path="/" element={() => (<h1>Test</h1>)}></Route>
          <Route path="/add" element={<CourseBuilderScreen/>}></Route>
          {/* <Route path="/courses" element={}></Route> */}
        </Routes>
    </div>
  )
}

export default WithTrainerLayout(TrainerScreen);