import React from 'react';
import classNames from 'classnames';
import Q from 'q';
import _ from 'underscore';
import context from './context';
import './style.css';
import ErrorReport from '../ErrorReport';
import Spinner from '../Spinner';

// Async loading
let Header = null;
let LeftNav = null;

class Layout extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            errorStack: null,
            loading: true,
            leftNavWidth: 280,
            slim: false,
        };

        this.checkSlimThrottled = _.throttle(this.checkSlim.bind(this), 250);
    }

    render() {
        if (this.state.error) return this.renderError();
        if (this.state.loading) return this.renderLoading();

        const { leftNavWidth } = this.state;
        const layoutClass = classNames(
            'layout',
            { 'slim': this.state.slim },
        );

        return (
            <div className={layoutClass}>
                <LeftNav width={leftNavWidth} />
                <Header />
            </div>
        );
    }

    renderError() {
        const { error, errorStack } = this.state;
        return ErrorReport({ error, errorStack });
    }

    renderLoading() {
        return Spinner({ size: 'large', centered: true });
    }

    componentDidMount() {
        this.loadChildren();
        this.checkSlim();
        window.addEventListener('resize', this.checkSlimThrottled);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkSlimThrottled);
    }

    componentDidCatch(error, info) {
        this.setState({ error, errorStack: info.componentStack });
    }

    checkSlim() {
        this.setState({ slim: window.innerWidth < 720 });
    }

    loadChildren() {
        return Q.all([
            import('../Header').then(m => Header = m.default),
            import('../LeftNav').then(m => LeftNav = m.default),
            import('../../lib/store').then(m => window.store = m.default),
        ]).then(() => {
            this.setState({ loading: false });
        });
    }
}

export default Layout;
