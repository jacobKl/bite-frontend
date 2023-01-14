import React from 'react'
import UserHeader from '../components/UserHeader/UserHeader';

function WithUserLayout(Component) {
  return function () {
    return (
      <>
          <UserHeader/>
          <div className="container">
            <Component />
          </div>
      </>
    )
  }
}

export default WithUserLayout