import React from 'react';
import imgSearch from '../../img/search.png';
import './style.css';

class SearchBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    render() {
        return <div className='search-bar'>
            {this.renderIcon()}
            {this.renderInput()}
        </div>;
    }

    renderIcon() {
        return <img className='search-bar__icon' src={imgSearch} />
    }

    renderInput() {
        const { inputValue } = this.state;
        return <input
            className='search-bar__input'
            name='search'
            type='search'
            placeholder='Search for people, chats or messages'
            value={inputValue}
        />;
    }

    renderLabel() {
        return <span className='search-bar__label'>
            Search for people, chats or messages
        </span>;
    }
}

export default SearchBar;
