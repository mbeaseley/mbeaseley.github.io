import React, { Component } from 'react';
import './SearchBox.scss';
import { ReactComponent as Search } from '../../assets/icons/Search.svg';

interface searchProp {
  onFormSubmit: any;
  onInputChange: any;
  visible?:boolean;
}

interface searchState {
  term: string;
}

export default class SearchBar extends Component<searchProp, searchState> {
  state = { term: '' }

  onInputChange = (event: any) => {
    this.setState({ term: event.target.value });
    this.props.onInputChange(event.target.value);
  }

  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className={(this.props.visible) ? 'hide' : 'search-bar' } >
        <form onSubmit={this.onFormSubmit} onChange={this.onInputChange}>
          <div className='search-bar__content'>
            <Search />
            <input
              type='text'
              placeholder='Search'
              value={this.state.term}
              onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
