import * as React from 'react';

import ColorItem from '../components/ColorItem';

interface Color {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface ColorsProps {
  colors: Array<Color>;
}

export default class ColorList extends React.Component<ColorsProps> {
  public static defaultProps: Partial<ColorsProps> = {
    colors: []
  };

  mapToComponent() {
    const { colors } = this.props;
    return colors.map((color, index) => <ColorItem {...color} key={index} />);
  }

  render() {
    return <div className="wtc-color-list">{this.mapToComponent()}</div>;
  }
}
