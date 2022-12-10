import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    withoutBorder?: boolean;
}

export function Avatar({ withoutBorder, ...props }: AvatarProps) {
    return (
        <img
            {...props} 
            className={withoutBorder ? styles.avatar : styles.avatarWithBorder} 
        /> 
    );
}