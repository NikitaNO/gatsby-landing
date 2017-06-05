import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class SpacesWeOffer  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 1
        }

    }
    overMouse(n){
        return () => {
            this.setState({selectedIndex: n});
        }
    }
    getImg(index){
        const size = ['0px', '0px', '0px'];
        size[index-1]='cover';
        return size.join(', ')
    }
    getActiveClass(index){
        return this.state.selectedIndex === index ? 'active' : '';
    }
    render(){
        // console.log(this.props);
        //<Page HTMLContent={this.props.body} />
        var styles = _.cloneDeep(this.constructor.styles);
        // console.log(this.props);
        // this.props.body.map((el0=>console.log(el0)))
        return(<Section {...this.props}
                        parentName = {this.constructor.displayName || constructor.name || undefined}
        >
            <div className="page-divider"><h1>Spaces We Offer</h1></div>

            <div className ="spaces-list">
                <ul>
                    <li className={this.getActiveClass(1)}>
                        <div onMouseOver={this.overMouse(1)}>
                            <h2>Flexible Workspace For Growing Teams</h2>
                            <p>We provide the resources so growing teams can focus their business. Many of our companies have graduated from coworking spaces.</p>
                            <img src="" alt="" className="img1"/>
                        </div>
                    </li>
                    <li className={this.getActiveClass(2)}>
                        <div onMouseOver={this.overMouse(2)}>
                            <h2>Branded Floors for Established Companies</h2>
                            <p>When you need your own floor we provide dedicated, branded space for your company with a backbone of Knotel management.</p>
                            <img src="" alt="" className="img2"/>
                        </div>
                    </li>
                    <li className={this.getActiveClass(3)}>
                        <div onMouseOver={this.overMouse(3)}>
                            <h2>Flagship Buildings for World Leaders</h2>
                            <p> When you are ready to take over the world, Knotel will take over a building for you. Turnkey commercial real estate at any size. </p>
                            <img src="" alt="" className="img3"/>
                        </div>
                    </li>
                    <li className="bg" style={{backgroundSize: this.getImg( this.state.selectedIndex ) }} ></li>
                </ul>
            </div>
        </Section>)
    }
}

SpacesWeOffer.styles = {

}
