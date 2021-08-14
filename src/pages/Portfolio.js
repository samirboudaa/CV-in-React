import React from 'react';
import Navigation from '../components/Navigation';
import { ProjectConfig } from '@jest/types/build/Config';
import ProjectList from '../components/Portfolio/ProjectList';
const Portfolio = () => {
    return (
        <div className="portfolio"> 
            <Navigation />
            <ProjectList/>
        </div>
    );
};

export default Portfolio;