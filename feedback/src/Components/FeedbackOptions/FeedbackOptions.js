import React from 'react';
import './FeedbackOptions.css'
import PropsType from 'prop-types'

const FeedbackOptions = ({getData}) => {
  return (
      <div className="container">
        <h1>Please Leave Feedback</h1>
        <button onClick={getData} name="good" className="btn btn1">Good</button>
        <button onClick={getData} name="neutral" className="btn btn2">Neutral</button>
        <button onClick={getData} name="bad" className="btn btn3">Bad</button>
      </div>
  );
};

export default FeedbackOptions;


FeedbackOptions.propsType = {
  getData: PropsType.number.isRequired
}