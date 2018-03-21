import * as React from 'react';
import * as firebase from './database/firebase';

interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
}

interface State {
  colors: Array<ColorData>;
}
export default class App extends React.Component {
  state: State = {
    colors: []
  };

  componentDidMount() {
    firebase.database.ref('colorDataSet').on('value', snap => {
      // null이 아닐 경우 snap에서 값을 가져온다.
      if (snap) {
        this.setState({
          colors: snap.val()
        });
      }
    });
  }

  mapToComponent() {
    const { colors } = this.state;
    return colors.map((color, index) => (
      <li
        style={{
          backgroundColor: color.hexCode,
          color: color.viewColor
        }}
        key={index}
      >
        {color.name}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <ul>{this.mapToComponent()}</ul>
      </div>
    );
  }
}
