import { useState } from 'react';
import Statistics from 'components/Statistic/statistic';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Section from './Section/section';
import Notification from './Notification/notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnClick = buttonFeedback => {
    switch (buttonFeedback) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = good + neutral + bad;
    return Math.round((good / totalFeedback) * 100);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const optionsArray = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsArray}
          onLeaveFeedback={btnClick}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countTotalFeedback() === 0 ? 0 : countPositiveFeedbackPercentage()
            }
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
// class App extends React.Component {
//   static defaultProps = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
//   };

//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };

//   btnClick = event => {
//     const targetOptionBtn = event.target.name;

//     const stateKeys = Object.keys(this.state);

//     for (const key of stateKeys) {
//       if (key === targetOptionBtn) {
//         this.setState(prevState => ({
//           [targetOptionBtn]: prevState[targetOptionBtn] + 1,
//         }));
//       }
//     }
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     const positiveFeedbackPercentage = Math.round((good / totalFeedback) * 100);
//     return positiveFeedbackPercentage;
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = good + neutral + bad;
//     return totalFeedback;
//   };

//   render() {
//     const optionsArray = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionsArray}
//             onLeaveFeedback={this.btnClick}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistic">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={
//                 this.countTotalFeedback() === 0
//                   ? 0
//                   : this.countPositiveFeedbackPercentage()
//               }
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback"></Notification>
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
