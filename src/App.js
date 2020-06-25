import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Shogo", age: 6},
    {name: "Nina", age: 5},
    {name: "Mayuko"}
  ]
  return(
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return (
    <React.Fragment>
      <h1>Hi! I am {props.name}, and {props.age} years old!</h1>
    </React.Fragment>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
