import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import CurrentUser from '../CurrentUser';
import NavThreads from '../NavThreads';

const propTypes = {
    width: PropTypes.number,
};

class LeftNav extends React.PureComponent {
    render() {
        return (
            <aside className='leftnav' style={this.makeStyle()}>
                {this.renderContent()}
            </aside>
        );
    }

    renderContent() {
        return <React.Fragment>
            {CurrentUser()}
            <NavThreads />
        </React.Fragment>;
    }

    makeStyle() {
        return {
            width: `${this.props.width}px`,
        };
    }
}

export default LeftNav;
