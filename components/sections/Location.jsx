import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
import {MapStatic} from "../MapStatic";
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class Location extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }

  }
  render(){
    //<Page HTMLContent={this.props.body} />
    var styles = _.cloneDeep(this.constructor.styles);
      // console.log(this.props);
      return(<Section {...this.props}
      parentName = {this.constructor.displayName || constructor.name || undefined}
      >
        <div className="page-divider"><h1>Our Locations</h1></div>
      <MapStatic height={this.props.windowHeight} width={this.props.windowWidth}></MapStatic>

    </Section>)
  }
}

Location.styles = {

}
