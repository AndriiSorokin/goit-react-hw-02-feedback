import React from 'react';
import PropsType from 'prop-types'

const Statistics = ({good,bad,neutral,getTotal,getPositiveFeedBack}) => {
  return (
    <>
        <ul className="list">
          <li className="item">Good:{good}</li>
          <li className="item">Neutral:{neutral}</li>
          <li className="item">Bad:{bad}</li>
          <li className="item">Total:{getTotal()}</li>
      </ul>
        <h2>Positive Feedback:{getTotal() ? getPositiveFeedBack().toFixed(0): 0}%</h2>
      </>
  );
};

export default Statistics;


Statistics.propsType = {
  good: PropsType.number.isRequired,
  bad: PropsType.number.isRequired,
  neutral: PropsType.number.isRequired,
  getTotal: PropsType.number.isRequired,
  getPositiveFeedBack: PropsType.number.isRequired
}