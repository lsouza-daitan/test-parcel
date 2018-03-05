import React from 'react';
import classNames from 'classnames';
import XRegExp from 'xregexp';
import style from './style.css';

const TAG_SEPARATOR = XRegExp('[\\p{P}\\p{Z}]');

const RoomAvatar = (props) => {
    const avatarClass = classNames(
        'room-avatar',
        { 'circle': props.type === 'circle' },
        { 'hexagon': props.type === 'hexagon' },
    );
    return <div className={avatarClass}>
        <div className='room-avatar__background' />
        <span className='room-avatar__tag'>{makeRoomTag(props.name)}</span>
    </div>;
};

function makeRoomTag(roomName) {
    if (roomName.length <= 2) return roomName.toUpperCase();
    const splitted = XRegExp.split(roomName, TAG_SEPARATOR, 2);
    return splitted.map(str => str[0]).join('').toUpperCase();
}

export default RoomAvatar;