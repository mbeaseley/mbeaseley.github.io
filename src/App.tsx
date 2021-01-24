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
  technologies: string[];
  link: string;
}

export default class App extends React.Component {
  state = { projectList: [], searchquery: '' };
  firstLoad = true;
  theme = false;
  page: React.RefObject<any>;

  constructor(props: iProp) {
    super(props);
    this.page = React.createRef();
  }

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

  async handleToggleEvent(active: boolean): Promise<void> {
    const page = this.page.current.classList;
    active ? page.add('page--light') : page.remove('page--light');

    this.theme = active;
  }

  render(): JSX.Element {
    const value = localStorage.getItem('cc:colorTheme');
    this.theme = value === 'true' ? true : false;

    return (
      <div className={this.theme ? 'page page--light' : 'page'} ref={this.page}>
        <SplashScreen />
        <div className='page__header'>
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            onInputChange={this.onInputChange}
            visible={false}
          />
          <ToggleSwitch handleClick={(res: boolean) => this.handleToggleEvent(res)} />
        </div>
        <div className='page__sidebar'>
          <ProfileCard />
        </div>
        <div className='page__main'>{this.renderProjects()}</div>
      </div>
    );
  }
}
