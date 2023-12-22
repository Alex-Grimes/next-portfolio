'use client';

import clsx from 'clsx';
import logo from '../../public/logo.gif';
import {Img} from './image';
import { Socials } from './socials';
import { ThemeChanger } from './theme-changer';
import { useScrollPosition } from '@/hooks';

export const Navbar = () => {
    const scrollPosition = useScrollPosition();
    return (
        <nav className={clsx('nav', { min: scrollPosition > 50 })}>
            <div className='container nav__container'>
                <div className="nav__brand">
                    <Img src={logo} alt='logo' height={50} />
                    <h4 className="nav__title">Alex Grimes</h4>
                    <h4 className="nav__title xs">Alex G.</h4>
                </div>
                <div className="nav__links">
                    <Socials />
                    <ThemeChanger />   
                </div>
            </div>

        </nav>
    );
};

