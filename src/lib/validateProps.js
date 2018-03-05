import PropTypes from 'prop-types';

const validateProps = (component, ownProps, propTypes, defaultProps = {}) => {
    const props = Object.assign(defaultProps, ownProps);
    PropTypes.checkPropTypes(propTypes, props, 'prop', component);
    return props;
}

export default validateProps;
