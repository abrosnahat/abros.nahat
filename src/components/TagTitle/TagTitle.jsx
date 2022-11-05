import styles from './TagTitle.module.scss';
import React from 'react';

export const TagTitle = ({ children }) => {
    return (
        <>
            <span className={styles.red}>&#60; </span>
            {children}&#160;
            <span className={styles.red}> &#8260; &#62;</span>
        </>
    );
};
