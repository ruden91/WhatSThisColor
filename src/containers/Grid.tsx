import * as React from 'react';
import * as firebase from '../database/firebase';

import Loading from '../components/Loading';
import Header from '../components/Header';
import ColorList from './ColorList';

interface ColorData {
  hexCode: string;
  name: string;
  viewColor: string;
  colorType: string;
}

interface State {
  initialItems: Array<ColorData>;
  colors: Array<ColorData>;
  loading: Boolean;
  filterTabIndex: number;
}

export default class Grid extends React.Component {
  state: State = {
    initialItems: [],
    colors: [],
    loading: true,
    filterTabIndex: 0
  };

  // color Item 필터 함수
  filterColorItems = (filterBy: string, index: number): void => {
    const { initialItems } = this.state;
    const filteredColors =
      filterBy === ''
        ? initialItems
        : initialItems.filter(item => item.colorType === filterBy);

    this.setState({
      colors: filteredColors,
      filterTabIndex: index
    });
  };

  componentDidMount() {
    firebase.database.ref('colorDataSet').on('value', snap => {
      // null이 아닐 경우 snap에서 값을 가져온다.
      if (snap) {
        this.setState({
          initialItems: snap.val(),
          colors: snap.val(),
          loading: false
        });
      }
    });
  }

  render() {
    const { colors, loading, filterTabIndex } = this.state;
    return (
      <div className="wtc-grid">
        {loading && <Loading />}
        {!loading && (
          <div>
            <Header
              filterColorItems={this.filterColorItems}
              filterTabIndex={filterTabIndex}
            />
            <ColorList colors={colors} />
          </div>
        )}
      </div>
    );
  }
}
