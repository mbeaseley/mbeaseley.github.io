import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/SideBar/SideBar';
import { ReactComponent as Settings } from './assets/icons/settings.svg';

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
          {/* <Button icon='settings' color='grey3' /> */}
          <a href='/' className='page__header--setting'><Settings /></a>
        </div>
        <div className="page__sidebar">
          <ProfileCard />
        </div>
        <div className="page__main"></div>
      </div>
    );
  }
}
