import React, { Component } from 'react'
import TagCloud from 'TagCloud'
import { Skill } from './AboutStyle'

/**
 * Cloud
 * return l'animation de la section About
 */
export default class Cloud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            options: {
                radius: 233,
                maxSpeed: 'fast',
                initSpeed: 'fast',
                direction: 135,
            },
            texts: [
                'Javascript',
                'PHP',
                'PHPUnit',
                'Symfony',
                'Twig',
                'Three.js',
                'React.js',
                'Python',
                'Django',
                '3D',
                'Blender',
                'C#',
                'Unity',
                'API REST',
                'MySQL',
                'GLSL',
                'Git',
                'NPM',
                'Webpack',
                'babel',
                'firebase',
            ],
        }
    }

    componentDidMount() {
        if(this.props.showCloud) {
            this.renderCloud();
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.showCloud !== this.props.showCloud && this.props.showCloud) {
            this.renderCloud();
        } else if (!this.props.showCloud) {
            this.clearCloud();
        }
    }

    componentWillUnmount() {
        this.clearCloud();
    }

    renderCloud() {
        const skill = document.getElementById('skill');
        
        if(skill && skill.childElementCount === 0) {
            const cloudComponent = document.createElement('div'); 
            cloudComponent.id = 'cloud-component';
            skill.appendChild(cloudComponent);
            TagCloud(cloudComponent, this.state.texts, this.state.options);
        }

    }

    clearCloud() {
        const skill = document.getElementById('skill');
        if(skill) {
            while(skill.firstChild) {
                skill.removeChild(skill.firstChild);
            }
        }
    }

    render() {
        if(this.props.showCloud) {
            return <Skill id="skill" />;
        } else {
            return null;
        }
    }
}
