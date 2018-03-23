import * as React from 'react';
import * as firebase from './database/firebase';

import Loading from './components/Loading';
import ColorView from './components/ColorView';
import Footer from './components/Footer';
// import Scrollbars from 'react-custom-scrollbars';
interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface State {
  colors: Array<ColorData>;
  loading: Boolean;
}
const sample = {
  hexCode: '#483D8B',
  name: 'DarkSlateBlue',
  viewColor: '#fff'
};

export default class App extends React.Component {
  state: State = {
    colors: [],
    loading: true
  };

  componentDidMount() {
    firebase.database.ref('colorDataSet').on('value', snap => {
      // null이 아닐 경우 snap에서 값을 가져온다.
      if (snap) {
        this.setState({
          colors: snap.val(),
          loading: false
        });
      }
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="wtc">
        {loading && <Loading />}
        {!loading && (
          <div>
            <ColorView {...sample} />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
