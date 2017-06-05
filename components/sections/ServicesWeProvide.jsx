import React from 'react';
import {Section} from '../Section.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class ServicesWeProvide  extends React.Component{
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
        const size = ['0px', '0px', '0px', '0px'];
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

            <div className ="service-list">

                <ul>
                    <li className={this.getActiveClass(1)}>
                        <div onMouseOver={this.overMouse(1)}>
                        <h2>Sourcing and Buildout</h2>
                            <p>Knotel bundles property market insight with interior design expertise and buildout management, which ensures the client’s space vision is met on time, on budget, and without headaches.</p>
                            <img src="" alt=""/>
                        </div>
                    </li>
                    <li className={this.getActiveClass(2)}>
                        <div onMouseOver={this.overMouse(2)}>
                            <h2>Seamless Operations</h2>
                            <p>Knotel provides comprehensive office services powered by domain experts and best of breed technology. Enjoy the highest ratio of conference rooms per person in the industry, and exclusive deals at a high quality set of partners</p>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li className={this.getActiveClass(3)}>
                        <div onMouseOver={this.overMouse(3)}>
                          <h2>Flexible Terms</h2>
                            <p>Knotel has a simple pricing structure with flexible terms. We offer various month to month and fixed term agreements tailored to your needs.</p>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li className={this.getActiveClass(4)}>
                        <div onMouseOver={this.overMouse(4)}>
                          <h2>Events and Community</h2>
                            <p>Knotels are vibrant spaces, with engaged communities and a strong roster of events. Enjoy office hours and informal access to like-minded industry professionals.</p>
                            <img src="" alt="" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="preview" style={{backgroundSize: this.getImg( this.state.selectedIndex ) }}> </div>
        </Section>)
    }
}

ServicesWeProvide.styles = {

}
