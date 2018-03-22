import * as React from 'react';

import ColorItem from '../components/ColorItem';
import * as CopyToClipboard from 'react-copy-to-clipboard';

interface Color {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface ColorsProps {
  colors: Array<Color>;
}

interface ColorListState {
  copied: Boolean;
  copiedColor: string;
}

export default class ColorList extends React.Component<
  ColorsProps,
  ColorListState
> {
  public static defaultProps: Partial<ColorsProps> = {
    colors: []
  };

  state: ColorListState = {
    copied: false,
    copiedColor: ''
  };

  handleCopy = (text: string, result: Boolean) => {
    alert(`${text} 코드 값이 복사되었습니다.`);
    this.setState({
      copied: true,
      copiedColor: text
    });
  };

  mapToComponent() {
    const { colors } = this.props;
    return colors.map((color, index) => (
      <CopyToClipboard
        text={color.hexCode}
        onCopy={this.handleCopy}
        key={index}
      >
        <div className="wtc-color-item__clipboard-container">
          <ColorItem {...color} />
        </div>
      </CopyToClipboard>
    ));
  }

  render() {
    return <div className="wtc-color-list">{this.mapToComponent()}</div>;
  }
}
