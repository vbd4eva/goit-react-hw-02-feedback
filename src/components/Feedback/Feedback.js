import React, { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    voteFeedback = (e) => {
        const newStateName = this.state[e.currentTarget.name] + 1;
        this.setState({
            [e.currentTarget.name]: newStateName,
        });
    };

    countTotalFeedback = () => Object.keys(this.state).reduce((acc, value) => acc + this.state[value], 0);
    
    countPositiveFeedbackPercentage = () => Math.round((this.state.good * 100) / this.countTotalFeedback());

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        return (
            <>
                <Section title="Please leave feedback" headerRank="1">
                    <FeedbackOptions options={options} onLeaveFeedback={this.voteFeedback}></FeedbackOptions>
                </Section>

                <Section title="Statistic" headerRank="2">
                    {
                        (total > 0) ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}></Statistics>) : <Notification message="No feedback given"/>
                    }
                </Section>
            </>
        )
    };
};

export default Feedback;

