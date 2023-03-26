import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.scss';

export const FeedbackOptions = ({ options, onButtonClick }) => {
  return (
    <div className={s.wrapper}>
      {options.map(option => {
        return (
          <button
            type="button"
            onClick={() => onButtonClick(option)}
            key={option}
            className={`${s.button} ${s[option]}`}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};
