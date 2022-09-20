import React, { Component } from 'react';
import s from './feedbackList.module.css';
import { Feedback } from './feedbacks/Feedback';
import Statistics from './stats/Statistics';
import Section from './section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    step: 1,
  };

  handleClick = ({ currentTarget: { name } }) => {
    this.setState(prevState => {
      return { [name]: prevState[name] + this.props.step };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number(good / this.countTotalFeedback()) * 100;
  };

  render() {
    // console.log(Object.values(this.state));
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onClick={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              options={Object.entries(this.state)}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <span className={s.feedbackAbsence}>No feedback given</span>
          )}
        </Section>
      </>
    );
  }
}

export default App;
