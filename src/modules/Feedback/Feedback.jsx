import { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback(propname) {
    this.setState(prevState => {
      return { [propname]: prevState[propname] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const { good } = this.state;
    const persentagePositeve = ((good / total) * 100).toFixed(1);
    return Number(persentagePositeve);
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const persentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={styles.blockStatistics}>
        <h3 className={styles.title}>Please leave feedback</h3>
        <button
          className={styles.button}
          type="button"
          onClick={() => this.leaveFeedback('good')}
        >
          Good
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => this.leaveFeedback('neutral')}
        >
          Neutral
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={() => this.leaveFeedback('bad')}
        >
          Bad
        </button>
        <div>
          <h4>Statistics</h4>
          <p>Good : {good}</p>
          <p>Neutral : {neutral}</p>
          <p>Bad : {bad}</p>
          <p>Total : {total}</p>
          <p>Positive feedback : {persentage} %</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
