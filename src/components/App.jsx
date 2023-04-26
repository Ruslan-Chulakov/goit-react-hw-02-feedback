import React, {Component} from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statictics from "./Statistics";
import Notification from "./Notification";
import buttonAnimation from "utils/buttonAnimation";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = ({ currentTarget }) => {
    const { name } = currentTarget;
    this.setState(
      prevState => ({ [name]: prevState[name] + 1 }),
      this.countTotalFeedback
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good * 100) / (good + neutral + bad)).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <div className="container" onMouseMove={buttonAnimation}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 && (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {total === 0 && (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
};
