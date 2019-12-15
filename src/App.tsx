import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/SideBar/SideBar';
import ProductCard from './components/ProductCard/ProductCard';

interface iProp {
  name: string;
  description: string;
  technologies: any;
  link: string;
}

export default class App extends React.Component {
  state = { projectList: [], searchquery: '' };

  onInputChange = async (term: string) => {
    const value = await term;
    await this.setState({ searchquery: value })
  }

  onTermSubmit = async (term: string) => {
    const value = await term;
    await this.setState({ searchquery: value })
  };

  componentDidMount() {
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

  findSearchResults() {
    if (this.state.searchquery.length === 0) {
      return this.state.projectList;
    }

    const searchProjects = this.state.projectList.filter((project: iProp) => {
      return project.name.toLowerCase().includes(this.state.searchquery.toLowerCase());
    });

    if (searchProjects === undefined) {
      console.warn('Search paramter not found');
      return [];
    }

    return searchProjects;
  }

  renderProjects() {
    const projects = this.findSearchResults().map((project: iProp, index) => {
      return (
        <ProductCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          link={project.link} />
      )
    })

    if (projects.length === 0 && this.state.searchquery.length > 0) {
      return <ProductCard name="No Content For This Search" />
    }
    return projects;
  }

  render() {
    return (
      <div className="page" >
        <div className="page__header">
          <SearchBar onFormSubmit={this.onTermSubmit} onInputChange={this.onInputChange} visible={false} />
        </div>
        <div className="page__sidebar">
          <ProfileCard />
        </div>
        <div className="page__main">
          {this.renderProjects()}
          
        </div>
      </div>
    );
  }
}
