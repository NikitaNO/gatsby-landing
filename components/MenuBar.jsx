import React from 'react';
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
var _ = require('lodash');

import {Motion, spring, presets} from 'react-motion';

import {Navigator} from '../utils/navigator.js';

export class MenuBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isHiden:false
    }
  }
  toggleMenu(){
    if(this.props.closeSection){
      this.props.onCloseSectionClick && this.props.onCloseSectionClick();
    } else {
      this.setState({isOpen:!this.state.isOpen});
    }

  }
  homeClick(e){
      console.log(e);
      Navigator.scrollTo('home');
  }
    isHiden() {
       return this.props.scrollTop < this.props.sections[0].component.props.windowHeight ? 'hidden-bar': ''
        //     this.setState({isHiden: true});
        // else this.setState({isHiden: false});
    }

  render(){

      // Clone the CSS styles and set the border-color CSS property.
    // var styles = _.cloneDeep(this.constructor.styles);
    // styles.notification.borderColor = this.props.color;
    //

      return (
          <div className={"header-bar " + (this.isHiden() )} >
            <div className="icon-box" onClick={this.homeClick}>
              <div>
              <svg width="100%" height="100%" viewBox="28 0 200 200" preserveAspectRatio="xMidYMid meet" version="1.1"
                   data-radium="true">
                <g id="Land-+-Overview" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                   data-radium="true">
                  <g id="Land-+-Overview---Desktop-HD" transform="translate(-591.000000, -246.000000)" fill="#FEFEFE"
                     data-radium="true">
                    <g id="Section-1---Land" data-radium="true">
                      <g id="Logo-Lockup" transform="translate(460.000000, 120.000000)"
                         data-radium="true">
                        <polyline id="Flag" points="334 126 260 322 186 126"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            </div>
            <div>
              <span><a href="tel:6788272782" data-radium="true"> 678-827-2782 </a></span>
              <span><a href="mailto:hellohello@knotel.com" data-radium="true" > hellohello@knotel.com </a></span>
            </div>
            <div>
              <button className='mdl-button mdl-js-button mdl-js-ripple-effect'>
                Login
              </button>
                <button  className='mdl-button mdl-js-button mdl-js-ripple-effect tour-btn'>
                    Book a tour
                </button>
            </div>
          </div>

      )


  }
}
