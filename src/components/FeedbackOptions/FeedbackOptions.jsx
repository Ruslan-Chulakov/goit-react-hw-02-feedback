import clsx from 'clsx';
import PropTypes from 'prop-types';
import buttonAnimation from 'utils/buttonAnimation';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={clsx(css.reaction)}>
      {options.map(option => (
        <button
          className={clsx(css.button)}
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
          onMouseMove={buttonAnimation}
        >
          <i></i>
          <i></i>
          <span>{option}</span>
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
