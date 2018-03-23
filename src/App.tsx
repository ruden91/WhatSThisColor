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

export default class App extends React.Component {
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
    const randomNumber = random(0, colors.length);

    this.setState({
      selectedColor: colors[randomNumber]
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
