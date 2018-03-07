import React from 'react';
import SearchBar from "../SearchBar";
import './style.css';

class Header extends React.PureComponent {
    render() {
        return (
            <nav id='header'>
                <SearchBar />
            </nav>
        );
    }
}

export default Header;
