import React from 'react'
import TakeCourseScreen from '../TakeCourseScreen/TakeCourseScreen';
import { Routes, Route } from 'react-router-dom';
import WithUserLayout from '../../hoc/WithUserLayout';
import UserRootScreen from '../UserRootScreen/UserRootScreen';
import UserRanking from "../UserRanking/UserRanking";

function UserScreen() {

  return (
    <>
      <Routes>
          <Route path="/" exact element={<UserRootScreen />}></Route>
          <Route path="/ranking" exact element={<UserRanking />}></Route>
        <Route path="/course/:id" exact element={<TakeCourseScreen />}></Route>
      </Routes>
    </>
  )
}

export default WithUserLayout(UserScreen);
