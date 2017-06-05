import React from 'react';
import {Section} from '../Section.jsx';
import {FooterBar} from '../FooterComponent.jsx';
import {Page} from '../Page.jsx';
var _ = require('lodash');
import {SideBlock} from '../SideBlock.jsx';
import {Signature} from '../Signature.jsx';

export class EventsWeHosting  extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        // console.log(this.props);
        //<Page HTMLContent={this.props.body} />
        var styles = _.cloneDeep(this.constructor.styles);
        console.log(this.props);
        // this.props.body.map((el0=>console.log(el0)))
        return(<Section {...this.props}
                        parentName = {this.constructor.displayName || constructor.name || undefined}
        >
            <div className="page-divider"><h1>Spaces We Offer</h1></div>
            <div className="form-block">
                <p >Stay in the know about Knotel events and news</p>
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
                        <input type="text" placeholder="First Name (required)" name="fname" value="" />
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
                        <input type="text" name="fname" value="" placeholder="Last Name (required)" />
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-cell--12-col-tablet">
                        <input type="text" name="fname" value="" placeholder="Email (required)" />
                    </div>
                    <div className="mdl-cell mdl-cell--12-col subscribe-block">
                        <button><span>SUBSCRIBE</span></button>
                    </div>
                </div>
            </div>

            <div className="events" dangerouslySetInnerHTML={{__html:this.props.body}}></div>
            <FooterBar></FooterBar>
        </Section>)
    }
}

EventsWeHosting.styles = {

}
