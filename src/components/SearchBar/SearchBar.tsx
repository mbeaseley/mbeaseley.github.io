import React from 'react';
import './SearchBox.scss'

interface IProp {
  onFormSubmit: any;
}

interface IState {
  term: string;
}

export default class SearchBar extends React.Component<IProp, IState> {
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
      <div className='search-bar' >
        <form onSubmit={this.onFormSubmit}>
          <div className='search-bar__content'>
            <i className='fas fa-search' />
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
