import React, { Component } from 'react';

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    voteGood = () => {
        this.setState(({good}) => ({ 
            good: good + 1,
        }));
    };

    voteNeutral = () => {
        this.setState(({neutral}) => ({ 
            neutral: neutral + 1,
        }));
    };

    voteBad = () => {
        this.setState(({bad}) => ({ 
            bad: bad + 1,
        }));
    };
    
    voteTotal = () => this.state.good + this.state.bad + this.state.neutral;

    votesPercentagePositive = () => Math.round((this.state.good*100)/this.voteTotal());

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button  onClick={this.voteGood}>good</button>
                    <button onClick={this.voteNeutral}>neutral</button>
                    <button onClick={this.voteBad}>bad</button>
                </div>
                <h2>Statistic</h2>
                <div>
                    <p>Good: <span>{this.state.good}</span></p>
                    <p>Neutral: <span>{this.state.neutral}</span></p>
                    <p>Bad: <span>{this.state.bad}</span></p>
                    <hr />
                    <p>Total: <span>{this.voteTotal()}</span></p>
                    {this.voteTotal()>0 && <p>Positive feedback: <span>{this.votesPercentagePositive()}</span>%</p>}
                </div>
            </div>
        )
    };
};

export default Feedback;

