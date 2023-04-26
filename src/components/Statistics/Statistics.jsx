import React, { Component } from "react";
import clsx from "clsx";
import css from "./Statistics.module.css"

class Statistics extends Component {
    render() {

        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
          <div className={clsx(css.statistics)}>
            <p>
              <span>Good:</span> <span>{good}</span>
            </p>
            <p>
              <span>Neutral:</span> <span>{neutral}</span>
            </p>
            <p>
              <span>Bad:</span> <span>{bad}</span>
            </p>
            <p>
              <span>Total:</span> <span>{total}</span>
            </p>
            <p>
              <span>Positive persentage:</span>{' '}
              <span>{positivePercentage}%</span>
            </p>
          </div>
        );
    }
};

export default Statistics;