import React from 'react'
import Greeting from '../../components/Greeting/Greeting';
import WithContext from '../../hoc/WithContext';

function TrainerWelcomeScreen() {

  // fetch('http://localhost:3001/')

  return (
    <>
      <Greeting />

    </>
  )
}

export default WithContext(TrainerWelcomeScreen);