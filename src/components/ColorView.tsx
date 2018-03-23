import * as React from 'react';
import { Link } from 'react-router-dom';
import * as CopyToClipboard from 'react-copy-to-clipboard';

interface Color {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface ColorListState {
  copied: Boolean;
  copiedColor: string;
}

export default class ColorView extends React.Component<Color, ColorListState> {
  public static defaultProps: Partial<Color> = {
    hexCode: '#009ac8',
    name: 'YellowGreen',
    viewColor: '#fff'
  };

  state: ColorListState = {
    copied: false,
    copiedColor: ''
  };

  handleCopy = (text: string, result: Boolean) => {
    console.log(text);
    this.setState({
      copied: true,
      copiedColor: text
    });
  };

  render() {
    const { hexCode, name, viewColor } = this.props;
    return (
      <div
        className="wtc-color-view"
        style={{ backgroundColor: hexCode, color: viewColor }}
      >
        <div>
          <p>{name}</p>
          <ul>
            <li>
              <CopyToClipboard text={hexCode} onCopy={this.handleCopy}>
                <a href="#">
                  <i className="fas fa-copy" />
                </a>
              </CopyToClipboard>
            </li>
            <li>
              <Link to="grid">
                <i className="fas fa-th-list" />
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-random" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
