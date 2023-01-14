import React from 'react'
import TakeCourseScreen from '../TakeCourseScreen/TakeCourseScreen';
import { Routes, Route } from 'react-router-dom';
import WithUserLayout from '../../hoc/WithUserLayout';
import WithContext from '../../hoc/WithContext';
import UserRootScreen from '../UserRootScreen/UserRootScreen';

function UserScreen({ state, dispatch }) {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<UserRootScreen />}></Route>
        <Route path="/course/:id" exact element={<TakeCourseScreen />}></Route>
      </Routes>
    </>
  )
}

export default WithUserLayout(WithContext(UserScreen));
