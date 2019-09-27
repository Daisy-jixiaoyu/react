import React, { Component,Fragment } from 'react';
import './style.css'
import { CSSTransition } from 'react-transtion-group'
class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = { isShow: true }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
    render() {
        return (
            <Fragment>
                <CSSTransition>
                    <div className={this.state.isShow ? 'show' : 'hide'}>
                        show hid
                    </div>
                    <button onClick={this.toggle}></button>
                </CSSTransition>
                
            </Fragment>

        );
    }
}

export default Animation;