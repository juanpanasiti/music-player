import React from 'react';
import { Sidebar } from '../shared/Sidebar';

export const HomeScreen = () => {
    return (
        <div className='home__main-content'>
            <Sidebar />
            <main>
                <h1>Home Screen</h1>
            </main>
        </div>
    );
};
