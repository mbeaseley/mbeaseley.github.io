import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ProfileCard from './components/SideBar/SideBar';
import ProductCard from './components/ProductCard/ProductCard';
import SplashScreen from './components/SplashScreen/SplashScreen';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';

interface iProp {
  name: string;
  description: string;
  technologies: any;
  link: string;
}

export default class App extends React.Component {
  state = { projectList: [], searchquery: '' };

  onInputChange = async (term: string): Promise<void> => {
    const value = term;
    return this.setState({ searchquery: value });
  };

  onTermSubmit = async (term: string): Promise<void> => {
    const value = term;
    return this.setState({ searchquery: value });
  };

  async componentDidMount(): Promise<void> {
    try {
      const response = await axios.get('/project.json');
      this.setState({
        projectList: response.data,
      });
    } catch (error) {
      console.warn(error);
    }
  }

  findSearchResults(): never[] {
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

  renderProjects(): JSX.Element[] | JSX.Element {
    const projects = this.findSearchResults().map((project: iProp, index) => {
      return (
        <ProductCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      );
    });

    if (projects.length === 0 && this.state.searchquery.length > 0) {
      return <ProductCard name='No Content For This Search' />;
    }
    return projects;
  }

  render(): JSX.Element {
    return (
      <div className='page'>
        <SplashScreen />
        <div className='page__header'>
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            onInputChange={this.onInputChange}
            visible={false}
          />
          <ToggleSwitch />
        </div>
        <div className='page__sidebar'>
          <ProfileCard />
        </div>
        <div className='page__main'>{this.renderProjects()}</div>
      </div>
    );
  }
}
