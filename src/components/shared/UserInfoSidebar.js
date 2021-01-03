import React from 'react';

export const UserInfoSidebar = () => {
    const user = {
        uid: 'asdfasdfasdf',
        displayName: 'Luke Skywalker',
        email: 'lukeskywalker@jedi.com',
        photoURL: 'https://static.wikia.nocookie.net/esstarwars/images/1/15/Luke_Skywalker_Ep_7_SWCT.png',
    };
    return (
        <div className='shared__user'>
            <div className='shared__user-info'>
                <img src={user.photoURL} alt={`${user.displayName}`} className='shared__user-photo' />
                <div className='shared__user-data'>
                    <h3>{user.displayName}</h3>
                    <small>{user.email}</small>
                </div>
            </div>
            
            <button className='btn'>Logout</button>
        </div>
    );
};
