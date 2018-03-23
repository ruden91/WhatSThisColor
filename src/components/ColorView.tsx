import * as React from 'react';

// interface Color {
//   hexCode: string;
//   name: string;
//   viewColor: string;
// }
const ColorView: React.SFC<{}> = (props: {}) => (
  <div className="wtc-color-view">
    <div>
      <p>YellowGreen</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  </div>
);

export default ColorView;
