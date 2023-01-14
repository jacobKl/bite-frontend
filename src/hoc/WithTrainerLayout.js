import React from 'react'
import Header from '../components/TrainerHeader/TrainerHeader'

function WithTrainerLayout(Component) {
  return function () {
    return (
      <>
          <Header />
          <Component />
      </>
    )
  }
}

export default WithTrainerLayout