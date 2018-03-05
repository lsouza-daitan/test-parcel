import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavAvatar from '../NavAvatar';
import style from './style.css';

const propTypes = {
    thread: PropTypes.object.isRequired,
};

const defaultProps = {

};

class NavItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className='nav-item'>
                {this.renderAvatar()}
            </li>
        );
    }

    renderAvatar() {
        return NavAvatar({ thread: this.props.thread });
    }
}

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
