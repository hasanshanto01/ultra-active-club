import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="navbar bg-accent">
            <div className="flex-1 ml-10">
                <img src={logo} alt="" className='w-10' />
                <a className="text-4xl font-bold ml-3">Fitness Freaks</a>
            </div>
            <div className="flex-none mr-10">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold">
                    <li><a href='/exercise'>Exercise</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;