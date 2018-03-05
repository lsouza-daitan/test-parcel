import React from 'react';
import classNames from 'classnames';
import faker from 'faker';
import style from './style.css';
import UserAvatar from '../UserAvatar';
import RoomAvatar from '../RoomAvatar';

const userName = faker.name.firstName();
const userAvatar = faker.image.avatar();

const CurrentUser = (props) => {
    return (
        <div className='current-user'>
            <div className='current-user__avatar'>
                {UserAvatar({ image: userAvatar })}
            </div>
            <div className='current-user__split' />
            <div className='current-user__info'>
                <span className='current-user__name'>{userName}</span>
                <span className='current-user__presence'>Available</span>
            </div>
        </div>
    );
};

export default CurrentUser;