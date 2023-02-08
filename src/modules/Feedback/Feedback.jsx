import { Component } from 'react';
import styles from './feedback.module.css';

class Feedback extends Component {
  render() {
    return (
      <div className={styles.blockStatistics}>
        <h3 className={styles.title}>Please leave feedback</h3>
        <button className={styles.button} type="button">
          Good
        </button>
        <button className={styles.button} type="button">
          Neutral
        </button>
        <button className={styles.button} type="button">
          Bad
        </button>
        <div>
          <h4>Statistics : </h4>
          <p>Good : </p>
          <p>Neutral : </p>
          <p>Bad : </p>
          <p>Total : </p>
          <p>Posite feedback : %</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
