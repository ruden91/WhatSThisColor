import * as React from 'react';
import { Link } from 'react-router-dom';
interface Color {
  hexCode: string;
  viewColor: string;
  name: string;
}

const ColorItem: React.SFC<Color> = (props: Color) => (
  <div
    className="wtc-color-item"
    style={{ backgroundColor: props.hexCode, color: props.viewColor }}
  >
    <Link to="color">
      <span>{props.name}</span>
    </Link>
  </div>
);

export default ColorItem;
