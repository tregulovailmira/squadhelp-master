import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import CONSTANTS from '../../constants';
import styles from './AuthHeader.module.sass';

export default function AuthHeader({ location }) {
    const buttonLink = location.pathname === '/login' ? '/registration' : '/login';
    const buttonText = location.pathname === '/login' ? 'Signup' : 'Login';

    return (
        <div className={styles.headerContainer}>
            <Logo src={ `${ CONSTANTS.STATIC_IMAGES_PATH }logo.png` } style={ { gridColumn: "1/6" } }/>
            <Link to={buttonLink} style={ {textDecoration: 'none', gridColumn: "6/7", justifySelf: "end"} }>
            <span className={styles.linkContainer}>{buttonText}</span>
            </Link>
        </div>
    )
}
