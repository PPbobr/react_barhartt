import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import StickyHeader from './StickyHeader';

const Header = () => {
    const location = useLocation();
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    };

    useEffect(() => {
        // Додаємо чи видаляємо класи для кореневих елементів на основі isDarkTheme
        const elementsToToggleClass = [
            'container',
            'StickyHeader',
            'Header',
            'Main',
            'Carousel',
            'popular_cont',
            'Departure',
            'Return',
            'FooterInfo',
            'Footer',
        ];

        elementsToToggleClass.forEach((element) => {
            const el = document.querySelector(`.${element}`);
            if (el) {
                el.classList.remove('dark-theme', 'light-theme'); // Видаляємо всі класи теми
                if (isDarkTheme) {
                    el.classList.add('dark-theme'); // Додаємо клас dark-theme, якщо тема темна
                } else {
                    el.classList.add('light-theme'); // Додаємо клас light-theme, якщо тема світла
                }
            }
        });
    }, [isDarkTheme]);

    return (
        <StickyHeader>
            <div className='header_block'>
                <div id='menuToggle'>
                    <input type='checkbox' />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id='menu'>
                        <li>
                            <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/Main' className={location.pathname === '/Main' ? 'active' : ''}>
                                Main
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className={location.pathname === '/Main' ? 'active' : ''}>
                                Main
                            </Link>
                        </li>
                        <button className='theme-button11' type='button' onClick={toggleTheme}>
                            Змінити тему
                        </button>
                    </ul>
                </div>
                <div className='header_text'>
                    <Link to='/' className='header_a1'>
                        головна сторінка
                    </Link>
                    <Link to='/Main' className='header_a2'>
                        каталог
                    </Link>
                    <div className='header_logo'>
                        <Link to='/' className='a_logo'>
                            <img src='/img/planet_logoo.png' alt='Логотип нашого магазину' className='header_logo_img' />
                        </Link>
                    </div>
                    <div className='header_text2'>
                        <a href='#kroos_yak' className='header_a3'>
                            more
                        </a>
                    </div>
                    <button className='theme-button' type='button' onClick={toggleTheme}>
                        Змінити тему
                    </button>
                </div>
            </div>
        </StickyHeader>
    );
};

export default Header;
