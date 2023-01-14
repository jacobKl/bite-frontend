import React from 'react'
import TakeCourseScreen from '../TakeCourseScreen/TakeCourseScreen';
import { Routes, Route } from 'react-router-dom';
import WithUserLayout from '../../hoc/WithUserLayout';

function UserScreen() {
  return (
    <Routes>
      <Route path="/course/:id/" element={<TakeCourseScreen/>}></Route>
    </Routes>
  )
}

export default WithUserLayout(UserScreen);