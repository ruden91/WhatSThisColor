import * as React from 'react';
import * as firebase from './database/firebase';

import Loading from './components/Loading';
import ColorView from './components/ColorView';
import Footer from './components/Footer';
import { random } from 'lodash';
// import Scrollbars from 'react-custom-scrollbars';
interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface State {
  colors: Array<ColorData>;
  loading: Boolean;
  selectedColor: ColorData;
}

interface AppProps {
  match?: {
    path: string;
    params: {
      colorName: string;
    };
  };
}
// {
//   isExact: Boolean;
//   params: {
//     colorName: string;
//   };
//   path: string;
//   url: string;
// };
export default class App extends React.Component<AppProps, State> {
  state: State = {
    colors: [],
    loading: true,
    selectedColor: {
      hexCode: '',
      name: '',
      viewColor: ''
    }
  };

  componentDidMount() {
    firebase.database.ref('colorDataSet').on('value', snap => {
      // null이 아닐 경우 snap에서 값을 가져온다.
      if (snap) {
        this.setState({
          colors: snap.val(),
          loading: false
        });
        this.getRandomColorItem();
      }
    });
  }

  getRandomColorItem = (): void => {
    const { colors } = this.state;
    // url param에 컬러이름이 존재하면 해당 컬러를 선택하고 아니면 랜덤선택!
    let paramColor = this.props.match!.params.colorName;
    let selectedColor = paramColor
      ? colors.filter(color => color.name === paramColor)[0]
      : colors[random(0, colors.length)];

    this.setState({
      selectedColor
    });
  };

  render() {
    const { loading, selectedColor } = this.state;
    return (
      <div className="wtc">
        {loading && <Loading />}
        {!loading && (
          <div>
            <ColorView
              {...selectedColor}
              getRandomColorItem={this.getRandomColorItem}
            />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
