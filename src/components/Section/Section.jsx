import React, { Component } from 'react';
import clsx from 'clsx';
import css from "./Section.module.css";

class Section extends Component {
    render() {  
        const { title } = this.props
        
    return (
      <div className={clsx(css.section)}>
            <h2 className={clsx(css.title)}>{title}</h2>
        {this.props.children}
      </div>
    );
  }
};

export default Section;