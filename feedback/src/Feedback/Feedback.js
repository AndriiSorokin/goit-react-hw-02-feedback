import React, { Component } from 'react';
import './Feedback.css'

class Feedback extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  goodE = () => {
    console.log(this);
    this.setState((prevState) => ({
      good: prevState.good+1
    }))
  }

   neutralE = () => {
    console.log(this);
    this.setState((prevState) => ({
      neutral: prevState.neutral+1
    }))
   }

   badE = () => {
    console.log(this);
    this.setState((prevState) => ({
      bad: prevState.bad+1
    }))
   }

  countTotalFeedback = () => {
   
  }



  render() {
    return (
      <div className="container">
        <h1>Please Leave Feedback</h1>
        <button onClick={this.goodE} className="btn btn1">Good</button>
        <button onClick={this.neutralE} className="btn btn2">Neutral</button>
        <button onClick={this.badE} className="btn btn3">Bad</button>

        <h2>Statistic:</h2>
        <ul className="list">
          <li className="item">Good:{this.state.good}</li>
          <li className="item">Neutral:{this.state.neutral}</li>
          <li className="item">Bad:{this.state.bad}</li>
        </ul>
        <h2>Positive Feedback:</h2>
      </div>
    )
  }
}
export default Feedback;