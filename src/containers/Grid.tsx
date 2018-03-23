import * as React from 'react';
import * as firebase from '../database/firebase';

import Loading from '../components/Loading';
import Header from '../components/Header';
import ColorList from './ColorList';

interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface State {
  colors: Array<ColorData>;
  loading: Boolean;
}

export default class Grid extends React.Component {
  state: State = {
    colors: [],
    loading: true
  };

  componentDidMount() {
    console.log('asdnklf');
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
    const { colors, loading } = this.state;
    return (
      <div className="wtc-grid">
        {loading && <Loading />}
        {!loading && (
          <div>
            <Header />
            <ColorList colors={colors} />
          </div>
        )}
      </div>
    );
  }
}
