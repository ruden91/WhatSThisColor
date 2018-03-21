import * as React from 'react';
import * as firebase from './database/firebase';

import Loading from './components/Loading';
import ColorItem from './components/ColorItem';
interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface State {
  colors: Array<ColorData>;
  loading: Boolean;
}
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

  mapToComponent() {
    const { colors, loading } = this.state;
    if (loading) {
      return <Loading />;
    }

    return colors.map((color, index) => <ColorItem {...color} key={index} />);
  }

  render() {
    return (
      <div>
        <div>{this.mapToComponent()}</div>
      </div>
    );
  }
}
