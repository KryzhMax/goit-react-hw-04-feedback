import { useState } from "react";
import s from "./feedbackList.module.css";
import { Feedback } from "./feedbacks/Feedback";
import Statistics from "./stats/Statistics";
import Section from "./section/Section";

const options = ["good", "neutral", "bad"];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ currentTarget: { name } }) => {
    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Number(good / countTotalFeedback()) * 100;
  };

  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback options={options} onClick={handleClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            options={Object.entries({ good, neutral, bad })}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <span className={s.feedbackAbsence}>No feedback given</span>
        )}
      </Section>
    </>
  );
};
