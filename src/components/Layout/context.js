import PropTypes from 'prop-types';
import context from '../../lib/context';

const layoutContext = {
    props: {
        slim: PropTypes.bool,
    },
    defaults: {
        slim: false,
    },
};

export default context(layoutContext);
