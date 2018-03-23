import * as React from 'react';

const Loading: React.SFC = () => (
  <div className="loader-overlay">
    <div className="loader">
      <div className="dot accent-orange" />
      <div className="dot accent-pink" />
      <div className="dot accent-green" />
      <div className="dot accent-cyan" />
      <div className="dot accent-blue" />
      <div className="dot accent-purple" />
    </div>
  </div>
);

export default Loading;
