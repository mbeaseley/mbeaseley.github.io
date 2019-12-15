import React, { Component } from 'react';
import './ProductCard.scss';
import Icon from '../Icon/Icon';

interface iProp {
  name: string;
  description?: string;
  technologies?: any;
  link?: string;
}

interface iconProps {
  name: string;
}

export default class ProductCard extends Component<iProp, any> {
  renderIcon() {
    if (!this.props.technologies) {
      return null;
    }
    const icons = this.props.technologies.map((icon: iconProps, index: number) => {
      return <Icon key={index} name={icon.toString()} isLabel={true}/>
    })
    return icons;
  }

  render() {
    return (
      <a className='product-card' href={this.props.link} target='_blank' rel='noopener noreferrer'>
        <span className='product-card__name'>{this.props.name}</span>
        <span className='product-card__description'>{this.props.description}</span>
        <span className='product-card__technologies'>
          {this.renderIcon()}
        </span>
      </a>
    )
  }
}