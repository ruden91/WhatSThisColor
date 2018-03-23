import * as React from 'react';
import { Link } from 'react-router-dom';
import * as CopyToClipboard from 'react-copy-to-clipboard';

interface Color {
  hexCode: string;
  name: string;
  viewColor: string;
  getRandomColorItem: (() => void);
}

interface ColorListState {
  copied: Boolean;
  copiedColor: string;
}

export default class ColorView extends React.Component<Color, ColorListState> {
  public static defaultProps: Partial<Color> = {
    hexCode: '',
    name: '',
    viewColor: ''
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

  componentDidMount() {
    const { hexCode, viewColor, name, getRandomColorItem } = this.props;

    // 선택된 컬러가 없을 경우 getRandomColorItem 함수를 통해 랜덤 컬러 값을 가져온다.
    if (hexCode === '' && viewColor === '' && name === '') {
      getRandomColorItem();
    }
  }

  render() {
    const { hexCode, name, viewColor, getRandomColorItem } = this.props;
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
              <a href="#" onClick={getRandomColorItem}>
                <i className="fas fa-random" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
