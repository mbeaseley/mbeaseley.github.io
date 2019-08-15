import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/SideBar/SideBar';
// import { ReactComponent as Settings } from './assets/icons/Settings.svg';
import ProductCard from './components/ProductCard/ProductCard';
import Separator from './components/Separator/Separator';

interface iProp {
  name: string;
  description: string;
  technologies: any;
  link: string;
}

export default class App extends React.Component {
  state = { projectList: [] };

  onTermSubmit = async (term: string) => {
    const value = await term;
    console.log(value);
  };

  componentWillMount() {
    axios.get('/project.json')
      .then(response => {
        this.setState({
          projectList: response.data
        });
      })
      .catch(function (error) {
        console.warn(error);
      });
  }

  renderProject() {
    const projects = this.state.projectList.map((project: iProp, index) => {
      return <ProductCard 
        key={index} 
        name={project.name} 
        description={project.description} 
        technologies={project.technologies}
        link={project.link} />
    })
    return projects;
  }

  render() {
    return (
      <div className="page" >
        <div className="page__header">
          <SearchBar onFormSubmit={this.onTermSubmit} visible={false} />
          {/* <a href='/' className='page__header--setting'><Settings /></a> */}
        </div>
        <div className="page__sidebar">
          <ProfileCard />
        </div>
        <div className="page__main">
          {
            this.renderProject()
          }
        </div>
      </div>
    );
  }
}
