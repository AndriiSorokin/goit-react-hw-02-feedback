
import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';

class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
    getData = (e) => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name]+1
    }))
  }

    getTotal = () => {
      return this.state.good + this.state.bad + this.state.neutral
  }

    getPositiveFeedBack = () => {
      return this.state.good / this.getTotal()*100
  }

    render() {
      const { good, bad, neutral} = this.state;
      return (
        <>
          <FeedbackOptions getData={this.getData} />
          <Statistics good={good}
            bad={bad}
            neutral={neutral}
            getData={this.getData}
            getTotal={this.getTotal}
            getPositiveFeedBack={this.getPositiveFeedBack} />
          </>
      );
    }
  }

  export default App;


