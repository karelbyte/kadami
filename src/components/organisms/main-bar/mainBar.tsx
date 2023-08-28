import {Toolbar,  styled } from "@mui/material";

export interface IMainBar {
    openDrawer: boolean;
    handleMainDrawer: Function
}

const ToolbarStyled = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

const useMenu = () => {
    return {
        
    }
}

export {useMenu, ToolbarStyled}