import React, { Component } from 'react';
import './SearchBox.scss';
import { ReactComponent as Search } from '../../assets/icons/search.svg';

interface IProp {
  onFormSubmit: any;
  visible?:boolean;
}

interface IState {
  term: string;
}

export default class SearchBar extends Component<IProp, IState> {
  state = { term: '' }

  onInputChange = (event: any) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className={(this.props.visible) ? 'hide' : 'search-bar' } >
        <form onSubmit={this.onFormSubmit}>
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
