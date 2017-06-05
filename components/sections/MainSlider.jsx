import React from 'react'

var _ = require('lodash');
import {Section} from '../Section';

export class MainSlider extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    var styles = _.cloneDeep(this.constructor.styles);

    if(this.props.windowWidth<800){
      styles.headMetaBox.textAlign = 'center';
      styles.headMetaBox.width = 'auto';
      styles.headMetaBox.marginLeft = 'auto';
      styles.headMetaBox.borderLeft = 'none';
      styles.container.backgroundSize= 'cover';
      delete styles.headMeta.top;
      styles.headMeta.bottom = 0;
      styles.headMeta.transform = 'translate(-50%,0)';
    }

    return(<Section
      {...this.props}

      >
      <div style={{...styles.container,
       minHeight:this.props.windowHeight}} className="home-container">
      {/*<div style={styles.overContainer} />*/}
      {/*<div style={styles.headMeta}>*/}
        {/*<div style={styles.headMetaBox} className='main_heading'>*/}
        {/*<h1 style={{fontSize:'2em', lineHeight: '2.60rem',color:'white', marginBottom:0}}*/}
          {/*dangerouslySetInnerHTML={{__html:this.props.headline}}></h1>*/}
        {/*<div dangerouslySetInnerHTML={{__html:this.props.body}}*/}
             {/*style={{fontSize:'1.2em', lineHeight:'1.2em', color:'white'}} />*/}
      {/*</div>*/}
      {/*</div>*/}
<div style={{...styles.overContainer}}>
        <div className="mdl-grid ">
          <div className="mdl-cell mdl-cell--12-col icon-row" >
            <div className="main-icon">
              <svg width="100%" height="100%" viewBox="-13 0 285 285" preserveAspectRatio="xMidYMid meet" version="1.1"
                   data-radium="true">
                <g id="Land-+-Overview" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-radium="true">
                  <g id="Land-+-Overview---Desktop-HD" transform="translate(-591.000000, -246.000000)" fill="#FEFEFE"
                     data-radium="true">
                    <g id="Section-1---Land" data-radium="true">
                      <g id="Logo-Lockup" transform="translate(460.000000, 120.000000)" data-radium="true">
                        <g id="Wordmark" transform="translate(131.000000, 365.000000)" data-radium="true">
                          <path d="M242,42.0555556 L259,26 L259,43 L241,43 L229,42.9995428 L229,2 L242,2 L242,42.0555556 Z"
                                id="L"></path>
                          <polygon id="E"
                                   points="220 12 220 2 188 2 188 43 220.089271 43 220 33 199 33 199 27 214 27 214 18 199 18 199 12"></polygon>
                          <polygon id="T"
                                   points="180 2 144 2 144 12.5 156 12.5 156 43 168 43 168 12.5 180 12.5"></polygon>
                          <path d="M118.5,12 C112.710454,12 108,16.7104539 108,22.5 C108,28.2895461 112.710454,33 118.5,33 C124.289546,33 129,28.2895461 129,22.5 C129,16.7104539 124.289546,12 118.5,12 M96,22.5 C96,10.0932203 106.09322,0 118.5,0 C130.90678,0 141,10.0932203 141,22.5 C141,34.9067797 130.90678,45 118.5,45 C106.09322,45 96,34.9067797 96,22.5 Z"
                                id="O"></path>
                          <polygon id="N"
                                   points="48 2 58.8706076 2 76.8471964 25 76.8471964 2 88 2 88 43 77.8419273 43 59.0684381 19.2446156 59.0684381 43 48 43"></polygon>
                          <polygon id="K"
                                   points="42 2 27 2 11.5 18.5 11.5 2 0 2 0 45.5 16 28.5 27 43 42 43 24.5 20.5"></polygon>
                        </g>
                        <polyline id="Flag" points="334 126 260 322 186 126"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="mdl-grid main-title">
          <div className="mdl-cell mdl-cell--12-col headline">
            <span dangerouslySetInnerHTML={{__html:this.props.headline}}  ></span>
          </div>
          <div className="mdl-cell mdl-cell--12-col subtitle">
            <span dangerouslySetInnerHTML={{__html:this.props.subtitle}} ></span>
          </div>

          <div className="mdl-cell mdl-cell--12-col tour-block">
            <button className='mdl-button mdl-js-button mdl-js-ripple-effect tour-btn'>
              Book a tour
            </button>
          </div>
        </div>


        <div className="btn-block">
        <div className="mdl-grid ">
          <div className="mdl-cell mdl-cell--3-col  mdl-cell--3-col-table mdl-cell--2-col-phone">
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
              LOCATIONS
          </button>
          </div>
          <div className="mdl-cell mdl-cell--2-col  mdl-cell--2-col-table mdl-cell--2-col-phone" >
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect ">
              SPACES
          </button></div>
         <div className="mdl-cell mdl-cell--2-col  mdl-cell--3-col-table mdl-cell--2-col-phone">
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
              SERVICES
          </button></div>
         <div className="mdl-cell mdl-cell--2-col mdl-cell--4-col-table mdl-cell--2-col-phone">
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
              EVENTS
          </button></div>

          <div className="mdl-cell mdl-cell--3-col  mdl-cell--4-col-table  mdl-cell--4-col-phone">
            <button className='mdl-button mdl-js-button mdl-js-ripple-effect hire-btn' >
              We're hiring
            </button>
          </div>
        </div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col">
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
                Tenant Reps
              </button>
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
                I have space
              </button></div>
          </div>
        </div>
      </div>
      </div>

    </Section>)
  }
}
MainSlider.styles = {
  container:{
    position: 'relative',

    background:'url(../assets/bi-0.1.jpg)',
      // filter: 'brightness(50%)',
    // backgroundRepeat: 'no-repeat',
    backgroundSize:'cover',
//       '::after': {
//           content: "",
// // position: fixed;
// // top: 0; bottom: 0; left: 0; right: 0;
//         background: 'rgba(0,0,0,0.1)',
//         pointerEvents: 'none'
//         },
  },
  overContainer:{
    position: 'absolute',
    width:'100%', height:'100%',
    //border: '15px solid rgba(29, 15, 32, 0.43)',
  },
  headMetaBox:{
    marginLeft:'50%',
    padding: 10,
    color: '#d0d0d0',
    borderLeft: '5px solid #fbbf69',
    background:'rgba(0, 0, 0, 0.51)'

  },
  headMeta:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '80%',

  }
}
