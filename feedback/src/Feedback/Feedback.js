import React from 'react';
import './Feedback.css'

const Feedback = ({good, neutral, bad, getData, getTotal,getPositiveFeedBack}) => {
    return (
      <div className="container">
        <h1>Please Leave Feedback</h1>
        <button onClick={getData} name="good" className="btn btn1">Good</button>
        <button onClick={getData} name="neutral" className="btn btn2">Neutral</button>
        <button onClick={getData} name="bad" className="btn btn3">Bad</button>

        <h2>Statistic:</h2>
        <ul className="list">
          <li className="item">Good:{good}</li>
          <li className="item">Neutral:{neutral}</li>
          <li className="item">Bad:{bad}</li>
          <li className="item">Total:{getTotal()}</li>
        </ul>
        <h2>Positive Feedback:{getTotal() ? getPositiveFeedBack().toFixed(0): 0}%</h2>
      </div>
    )
  }
export default Feedback;
