import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({
  goodButtonClick,
  neutralButtonClick,
  badButtonClick,
}) => {
  return (
    <div className={s.wrapper}>
      <button onClick={goodButtonClick} className={`${s.button} ${s.good}`}>
        Good
      </button>
      <button
        onClick={neutralButtonClick}
        className={`${s.button} ${s.neutral}`}
      >
        Neutral
      </button>
      <button onClick={badButtonClick} className={`${s.button} ${s.bad}`}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  goodButtonClick: PropTypes.func.isRequired,
  neutralButtonClick: PropTypes.func.isRequired,
  badButtonClick: PropTypes.func.isRequired,
};
