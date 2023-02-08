import { nanoid } from 'nanoid';
import styles from './feedbackOptions.module.css';

export default function FeedbackOptions({ options, leaveFeedback }) {
  const elements = options.map(option => {
    return (
      <li key={nanoid()}>
        <button
          onClick={() => leaveFeedback(option)}
          type="button"
          className={styles.button}
        >
          {option.toUpperCase()}
        </button>
      </li>
    );
  });
  return <ul className={styles.list}>{elements}</ul>;
}
