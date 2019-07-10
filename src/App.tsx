import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';

export default class App extends React.Component {
  onTermSubmit = async (term: string) => {
    const value = await term;
    console.log(value);
  };

  render() {
    return (
      <div className="page" >
        <div className="page__header">
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        <div className="page__sidebar"></div>
        <div className="page__main"></div>
        <div className="page__footer"></div>
      </div>
    );
  }
}
