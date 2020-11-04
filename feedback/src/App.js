
import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import Notification from "./Components/Notification/Notification"

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
          <Section title={'Please Leave Feedback'}  >
            <FeedbackOptions getData={this.getData} />
          </Section>

          <Section title={'Statistic:'}>
            {this.getTotal() > 0 ? <Statistics good={good}
            bad={bad}
            neutral={neutral}
            getData={this.getData}
            getTotal={this.getTotal}
            getPositiveFeedBack={this.getPositiveFeedBack} /> :

            <Notification message={'No feedback given'} />}
          </Section>
         </>
      );
    }
  }

  export default App;


