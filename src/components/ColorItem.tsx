import * as React from 'react';
import { Link } from 'react-router-dom';
interface ColorItemProps {
  hexCode: string;
  viewColor: string;
  name: string;
}

const ColorItem: React.SFC<ColorItemProps> = (props: ColorItemProps) => (
  <Link to={'color/' + props.name} style={{ color: props.viewColor }}>
    <span className="wtc-color-item" style={{ backgroundColor: props.hexCode }}>
      <span>{props.name}</span>
    </span>
  </Link>
);

export default ColorItem;
