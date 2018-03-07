import React from 'react';
import classNames from 'classnames';
import './style.css';

const UserAvatar = (props) => {
    const avatarClass = classNames(
        'user-avatar',
        { 'full': props.full },
        { 'round': !props.full },
    );
    return <img src={props.image} className={avatarClass} />;
};

export default UserAvatar;