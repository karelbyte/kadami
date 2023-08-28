import { styled } from "@mui/material";
import { useEffect, ReactNode } from "react";
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export interface IMainDrawer {
  openDrawer: boolean;
  setOpenDrawer: Function
}

export interface IMenuItem {
  fnClick: Function,
  name: string,
  icon: ReactNode
}

const drawerWidth: number = 200 as const;

const DrawerLeft = styled('div')(({ theme }) => {
  return {
    width: drawerWidth,
    borderRight: `1px solid ${theme.palette.secondary.main}`,
    height: `calc(100vh - 48px)`,
    boxShadow: `0 1px 2px ${theme.palette.secondary.main}`,
    padding: "0 0.1rem 0 0.1rem",
  }
});

const useMainMenu = (props: IMainDrawer) => {

  const { openDrawer, setOpenDrawer } = props;

  const menuItems: Array<IMenuItem> = [
    {
      fnClick: () => {},
      name: "Productos",
      icon: <DraftsIcon/>
    },
    {
      fnClick: () => {},
      name: "Usuarios",
      icon: <InboxIcon/>
    }
  ] 

  const checkWidthScreen = () => {
    setOpenDrawer(window.innerWidth > 576)
  };

  useEffect(() => {
    checkWidthScreen();
    window.addEventListener('resize', checkWidthScreen);

    return () => {
      window.removeEventListener('resize', checkWidthScreen);
    };
  }, []);

  return { setOpenDrawer, openDrawer, menuItems }
}

export { useMainMenu, DrawerLeft };