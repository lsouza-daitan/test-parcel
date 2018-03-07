import React from 'react';
import classNames from 'classnames';
import RoomAvatar from '../RoomAvatar';
import UserAvatar from '../UserAvatar';
import './style.css';

const NavAvatar = (props) => {
    const { thread } = props;
    const isRoom = thread.type === 'ROOM';
    const isMIM = !isRoom && thread.memberCount > 1;
    const isIM = !isRoom && thread.memberCount === 1;

    const shownAvatars = !isRoom && thread.avatars.slice(0, 2);

    const avatarClass = classNames(
        'nav-avatar',
        { 'is-room': isRoom },
        { 'is-mim': isMIM },
        { 'is-im': isIM },
    );
    return <div className={avatarClass}>
        {(
            isRoom
                ? RoomAvatar({ name: thread.name, type: 'circle' })
                : shownAvatars.map(avatar => UserAvatar({ image: avatar }))
        )}
    </div>
};

export default NavAvatar;
