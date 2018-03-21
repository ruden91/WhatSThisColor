import * as React from 'react';

interface Color {
  hexCode: string;
  viewColor: string;
  name: string;
}

const ColorItem: React.SFC<Color> = (props: Color) => (
  <div style={{ backgroundColor: props.hexCode, color: props.viewColor }}>
    {props.name}
  </div>
);

export default ColorItem;
