import styles from './Header.module.scss';
import React from 'react';
import { TagTitle } from '../TagTitle/TagTitle';
import cn from 'classnames';

export const Header = () => {
    return (
        <nav className={styles.header}>
            <div className={styles.logo}>
                <TagTitle>abros.nahat</TagTitle>
            </div>
            <div className={styles.navLinks}>
                <a href='#start' className={cn(styles.link, styles.active)}>
                    <TagTitle>Start</TagTitle>
                </a>
                <a href='#work' className={styles.link}>
                    <TagTitle>Work</TagTitle>
                </a>
                <a href='#lab' className={styles.link}>
                    <TagTitle>Lab</TagTitle>
                </a>
                <a href='#about' className={styles.link}>
                    <TagTitle>About</TagTitle>
                </a>
                <a href='#contact' className={styles.link}>
                    <TagTitle>Contact</TagTitle>
                </a>
            </div>
        </nav>
    );
};
