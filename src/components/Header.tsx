import * as React from 'react';

import { Link } from 'react-router-dom';
import ColorFilters from './ColorFilters';
import * as data from '../api/data';

interface HeaderProps {
  filterColorItems: ((filterBy: string, index: number) => void);
  filterTabIndex: number;
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => (
  <header className="wtc-header">
    <Link to="/" className="wtc-header__main-link">
      Back to 147 Colors
    </Link>
    <div className="wtc-header__right-content">
      <ColorFilters
        filters={data.filters()}
        filterColorItems={props.filterColorItems}
        filterTabIndex={props.filterTabIndex}
      />
    </div>
  </header>
);

export default Header;
