import React from "react";
import Styles from "./CircleChart.module.scss";

/**
 *
 * @param {Object} props
 * @param {number} props.score score number of the current user
 * @returns
 */
export const CircleChart = ({ score = 10 }) => {
  return (
    <div className={Styles.container}>
      <svg viewBox="0 0 36 36" className={Styles.CircleChart}>
        <path
          className={Styles.circle}
          strokeDasharray={`${score}, 100`}
          d="M18 2.0845
      a 15.9155 15.9155 0 1 0 0 31.831
      a 15.9155 15.9155 0 1 0 0 -31.831"
        />
        <circle className={Styles.innerCircle} cx="18" cy="18" r="15" />
        <text x="18" y="15.35" className={Styles.percentage}>
          {score}%
        </text>
        <text x="18" y="19.35" className={Styles.text}>
          de votre
        </text>
        <text x="18" y="23.35" className={Styles.text}>
          objectif
        </text>
      </svg>
    </div>
  );
};
