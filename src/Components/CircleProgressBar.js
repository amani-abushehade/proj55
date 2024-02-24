import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MyGradientCircularProgress = ({ percentage }) => {
  return (
    <div style={{ width: '130px' , height: '130px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          trailColor: 'transparent',
          pathColor: 'url(#gradient)',
          strokeWidth:10,
          textColor: '#ffffff',
        })}
      />
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(0)">
            <stop offset="10%" stopColor="#5e08af" />
            <stop offset="40%" stopColor="#0748c0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default MyGradientCircularProgress;
