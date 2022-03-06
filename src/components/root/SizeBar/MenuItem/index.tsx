import { useAppDispatch, useAppSelector } from '@src/hooks/useAppDispatch';
import { menuAction } from '@src/store/reducers/menuSlice';
import { INavLinkItem } from '@src/types/utils';
import clsx from 'clsx';
import { FC, Fragment, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

type MenuItemProps = {
    data: Omit<INavLinkItem, 'children'>;
    height: number;
};

const MenuItem: FC<MenuItemProps> = ({ data, height }) => {
    const { title, path, key } = data || {};
    const isDispathActive = useRef(false);

    const dispath = useAppDispatch();
    // const activeKey = useAppSelector((state) => state.menu.menuActiveKey);

    const _getMenuItemClassName = (params?: any) => {
        const { isActive } = params || {};

        if (path) {
            if (isDispathActive.current === false && isActive) {
                isDispathActive.current = true;
                dispath(menuAction.setMenuActiveKey(isActive ? key : ''));
            }
            return clsx(styles.menuItem, { [styles.active]: isActive });
        }

        return clsx(styles.menuItem);
    };

    if (!path) {
        return <Fragment />;
    }
    return (
        <NavLink to={path} style={{ height: height }} className={_getMenuItemClassName}>
            <div className={styles.fakeIcon}></div>
            <div className={styles.title}>
                <span>{title}</span>
            </div>
        </NavLink>
    );
};

export default MenuItem;