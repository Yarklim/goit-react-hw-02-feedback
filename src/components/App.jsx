import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistic } from './Statistics';
import { Notification } from './Notification';
import s from './App.module.scss';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  sumTotalButtonClick = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  getPositivePercentage = () => {
    const { good } = this.state;
    const total = this.sumTotalButtonClick();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const totalClicks = this.sumTotalButtonClick();
    const positivePercentage = this.getPositivePercentage();
    return (
      <div className={s.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onButtonClick={this.onButtonClick}
          />
        </Section>
        <Section title="Statistic">
          {totalClicks > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalClicks}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
