import { APP_CONFIG } from '@config/appConfig';
import { FC } from 'react';

const NavBar: FC = () => {
    return (
        <div bg="red-400" style={{ height: APP_CONFIG.NAV_BAR_HEIGHT }} className="border-b">
            <div></div>
        </div>
    );
};

export default NavBar;
