import React from 'react';
import PropTypes from 'prop-types';
export default class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}
Cat.propTypes = {
    mouse: PropTypes.object.isRequired
};