import { AppBar, Typography } from "@mui/material";
import { FC } from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserMenu } from '../user-memu';
import { ToolbarStyled, IMainBar } from "./mainBar"
import BoxFlex from "../../atoms/BoxFlex";

const MainBar: FC<IMainBar> = (props: IMainBar) => {
    const { handleMainDrawer, openDrawer } = props;
    return (
        <AppBar position="static">
            <ToolbarStyled variant="dense">
                <BoxFlex>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => handleMainDrawer(!openDrawer)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Flox
                    </Typography>
                </BoxFlex>
                <BoxFlex>
                    <UserMenu />
                </BoxFlex>
            </ToolbarStyled>
        </AppBar>
    )
}

export default MainBar;