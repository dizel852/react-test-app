import React from 'react';
import { generateRandomItems } from '../../helpers/items';
import { List } from '../Items/List';
import { PaginationBar } from '../Pagination/Pagination';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentPage: 1,
      itemsPerPage: 10
    };
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
    this.getCurrentItems = this.getCurrentItems.bind(this);
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    const res = generateRandomItems(100, 5);
    this.setState({
      items: res
    });
  }

  handleRLDDChange(reorderedItems) {
    const { currentPage, itemsPerPage, items } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    items.splice(indexOfFirstItem, indexOfLastItem, ...reorderedItems)
    this.setState({ items });
  }

  getCurrentItems() {
    const { currentPage, itemsPerPage, items } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  }
  
  paginate(number) {
    this.setState({ currentPage: number });
  }

  render() {
    const { items, itemsPerPage } = this.state;
    return (
      <React.Fragment>
        <div className="container mt-5">
          <h1 className="text-primary mb-5">List</h1>
          <List
            items={this.getCurrentItems()}
            updateState={this.handleRLDDChange}
          />
          <PaginationBar itemsPerPage={itemsPerPage} totalItems={items.length} paginate={this.paginate}/>
        </div>
      </React.Fragment>
    );
  }
}
