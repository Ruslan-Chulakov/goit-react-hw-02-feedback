import React, { Component } from 'react';
import clsx from 'clsx';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  //////
    
   
  //////
  //   render() {
  //     const { options, onLeaveFeedback } = this.props;

  //     return (
  //       <div className={clsx(css.reaction)}>
  //         {options.map(option => (
  //           <button
  //             className={clsx(css.button)}
  //             key={option}
  //             name={option}
  //             type="button"
  //             onClick={onLeaveFeedback}
  //           >
  //             {option}
  //           </button>
  //         ))}
  //       </div>
  //     );
  //   }

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={clsx(css.reaction)}>
        {options.map(option => (
          <button
            className={clsx(css.button)}
            key={option}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            <i></i>
            <i></i>
            <span>{option}</span>
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
