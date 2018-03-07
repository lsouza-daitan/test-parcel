import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.css';

const propTypes = {
    centered: PropTypes.bool,
    size: PropTypes.oneOf([ 'small', 'normal', 'large' ]),
};

const defaultProps = {
    centered: false,
    size: 'normal',
}

const Spinner = (props) => {
    // const props = validateProps('Spinner', ownProps, propTypes, defaultProps);
    const spinnerClass = classNames(
        'spinner',
        { 'centered': props.centered },
        { 'small': props.size === 'small' },
        { 'large': props.size === 'large' },
    );
    return <div className={spinnerClass} />
}

export default Spinner;
