import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { FC, Fragment } from 'react';
import { useMenu } from './menu';
const UserMenu: FC = () => {

    const {
        anchorEl,
        handleMenu,
        menuItes,
        handleClose
    } = useMenu()

    return <Fragment>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ top: 25, left: -10 }}
        >
            {
                menuItes &&
                menuItes.map((menu, index) => <MenuItem onClick={() => menu.fnClick()} key={index}>{menu.name}</MenuItem>)
            }
        </Menu>
    </Fragment>
}


export default UserMenu;
