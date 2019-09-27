import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Header extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.deleteItem()
    }
    render() {
        return (
            <div onClick={this.handleClick}>bbb{this.props.content}</div>
        );
    }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps')
    // }
}
Header.propTypes = {
    content: PropTypes.string.isRequired,
    deleteItem: PropTypes.func.isRequired
}
export default Header;