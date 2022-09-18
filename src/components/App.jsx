import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";

export function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (key) => {
    console.log(key);
    switch (key) {
      case 'Good':
        setGood(state => state + 1);
        break;
      case 'Neutral':
        setNeutral(state => state + 1);
        break;
      case 'Bad':
        setBad(state => state + 1);
        break;
      
      default:
        return;
    }
  }

    const total = good + neutral + bad;
    const totalFeadback = (good / total) * 100;
    
    return (
      <>
      
        <Section title="Please live feadback" >
          <FeedbackOptions options={["Good", "Neutral", "Bad"]} onLeaveFeedback={handleClick} />
        </ Section>

        <Section title="Statistics" >
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={totalFeadback} />
        </ Section >

        
      </>
        

    )
  }