import LeaveFeedback from 'modules/LeaveFeedback/LeaveFeedback';
import Feedback from 'modules/Feedback/Feedback';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
