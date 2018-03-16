import React from 'react';
import NavItem from '../NavItem';

class NavThreads extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            threads: _.toArray(store.threads).sort((a, b) => b.lastTimestamp - a.lastTimestamp),
        };
    }

    render() {
        return <ul className='nav-threads'>
            {this.state.threads.map(this.renderItem)}
        </ul>;
    }

    renderItem(thread) {
        return <NavItem key={thread.id} thread={thread} />;
    }
}

export default NavThreads;
