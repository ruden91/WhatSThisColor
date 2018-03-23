import * as React from 'react';

interface Filter {
  name: string;
  filterBy: string;
}

interface FilterProps {
  filters: Array<Filter>;
  filterColorItems: ((filterBy: string, index: number) => void);
  filterTabIndex: number;
}

export default class ColorFilters extends React.Component<FilterProps> {
  mapToComponent = () => {
    const { filters, filterColorItems, filterTabIndex } = this.props;

    return filters.map((filter, index) => {
      const activeClass = filterTabIndex === index ? 'is-active' : '';

      return (
        <li
          key={index}
          onClick={() => filterColorItems(filter.filterBy, index)}
          className={activeClass}
        >
          {filter.name}
        </li>
      );
    });
  };

  render() {
    return (
      <div className="wtc-color-filters">
        <p>Filter Colors</p>
        <ul>{this.mapToComponent()}</ul>
      </div>
    );
  }
}
