import * as React from 'react';

interface Color {
  hexCode: string;
  viewColor: string;
  name: string;
}

const ColorItem: React.SFC<Color> = (props: Color) => <div>asdf</div>;

export default ColorItem;
